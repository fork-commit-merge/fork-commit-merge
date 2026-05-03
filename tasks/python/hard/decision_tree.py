import numpy as np
from collections import Counter


class DecisionTreeNode:
    """A node in the decision tree."""

    def __init__(self, feature=None, threshold=None, left=None, right=None, value=None):
        self.feature = feature      # Index of feature to split on
        self.threshold = threshold  # Threshold value for the split
        self.left = left            # Left subtree
        self.right = right          # Right subtree
        self.value = value          # Class label (for leaf nodes)


class DecisionTreeClassifier:
    """Decision Tree Classifier implemented from scratch using NumPy."""

    def __init__(self, max_depth=10, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root = None

    def _gini_impurity(self, y):
        """Calculate Gini impurity for a set of labels."""
        if len(y) == 0:
            return 0
        counts = Counter(y)
        impurity = 1.0
        for count in counts.values():
            prob = count / len(y)
            impurity -= prob ** 2
        return impurity

    def _information_gain(self, y, left_y, right_y):
        """Calculate information gain from a split."""
        parent_impurity = self._gini_impurity(y)
        n = len(y)
        n_left, n_right = len(left_y), len(right_y)
        if n_left == 0 or n_right == 0:
            return 0
        child_impurity = (n_left / n) * self._gini_impurity(left_y) + \
                         (n_right / n) * self._gini_impurity(right_y)
        return parent_impurity - child_impurity

    def _best_split(self, X, y):
        """Find the best feature and threshold to split on."""
        best_gain = -1
        best_feature = None
        best_threshold = None
        n_features = X.shape[1]

        for feature in range(n_features):
            thresholds = np.unique(X[:, feature])
            for threshold in thresholds:
                left_mask = X[:, feature] <= threshold
                right_mask = ~left_mask
                left_y, right_y = y[left_mask], y[right_mask]

                gain = self._information_gain(y, left_y, right_y)
                if gain > best_gain:
                    best_gain = gain
                    best_feature = feature
                    best_threshold = threshold

        return best_feature, best_threshold

    def _build_tree(self, X, y, depth=0):
        """Recursively build the decision tree."""
        n_samples = len(y)
        n_classes = len(np.unique(y))

        # Stopping conditions
        if depth >= self.max_depth or n_classes == 1 or n_samples < self.min_samples_split:
            # Return leaf node with most common class
            most_common = Counter(y).most_common(1)[0][0]
            return DecisionTreeNode(value=most_common)

        feature, threshold = self._best_split(X, y)
        if feature is None:
            most_common = Counter(y).most_common(1)[0][0]
            return DecisionTreeNode(value=most_common)

        # Split the data
        left_mask = X[:, feature] <= threshold
        right_mask = ~left_mask

        left_subtree = self._build_tree(X[left_mask], y[left_mask], depth + 1)
        right_subtree = self._build_tree(X[right_mask], y[right_mask], depth + 1)

        return DecisionTreeNode(feature=feature, threshold=threshold,
                                left=left_subtree, right=right_subtree)

    def fit(self, X, y):
        """Fit the decision tree to the training data."""
        X = np.array(X)
        y = np.array(y)
        self.root = self._build_tree(X, y)
        return self

    def _predict_sample(self, x, node):
        """Predict the class for a single sample."""
        if node.value is not None:
            return node.value
        if x[node.feature] <= node.threshold:
            return self._predict_sample(x, node.left)
        return self._predict_sample(x, node.right)

    def predict(self, X):
        """Predict classes for multiple samples."""
        X = np.array(X)
        return np.array([self._predict_sample(x, self.root) for x in X])

    def print_tree(self, node=None, indent=""):
        """Print the tree structure."""
        if node is None:
            node = self.root

        if node.value is not None:
            print(f"{indent}Leaf: class = {node.value}")
            return

        print(f"{indent}Feature {node.feature} <= {node.threshold}")
        print(f"{indent}├── Left:")
        self.print_tree(node.left, indent + "│   ")
        print(f"{indent}└── Right:")
        self.print_tree(node.right, indent + "    ")


def generate_dataset():
    """Generate a simple dataset with 3 features and 2 classes."""
    np.random.seed(42)
    # Class 0: feature values centered around (0.3, 0.3, 0.3)
    # Class 1: feature values centered around (0.7, 0.7, 0.7)
    X_class0 = np.random.randn(50, 3) * 0.15 + 0.3
    X_class1 = np.random.randn(50, 3) * 0.15 + 0.7
    X = np.vstack([X_class0, X_class1])
    y = np.array([0] * 50 + [1] * 50)
    return X, y


def train_test_split(X, y, test_ratio=0.2):
    """Simple train/test split."""
    n = len(y)
    indices = np.random.permutation(n)
    test_size = int(n * test_ratio)
    test_idx = indices[:test_size]
    train_idx = indices[test_size:]
    return X[train_idx], X[test_idx], y[train_idx], y[test_idx]


def accuracy(y_true, y_pred):
    """Calculate accuracy."""
    return np.sum(y_true == y_pred) / len(y_true)


def precision_recall_f1(y_true, y_pred):
    """Calculate precision, recall, and F1 for binary classification."""
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    fn = np.sum((y_true == 1) & (y_pred == 0))

    precision = tp / (tp + fp) if (tp + fp) > 0 else 0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0
    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0

    return precision, recall, f1


if __name__ == "__main__":
    # Generate dataset
    X, y = generate_dataset()
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_ratio=0.2)

    # Train the classifier
    clf = DecisionTreeClassifier(max_depth=5)
    clf.fit(X_train, y_train)

    # Print the tree structure
    print("Decision Tree Structure:")
    clf.print_tree()
    print()

    # Evaluate
    y_pred = clf.predict(X_test)
    acc = accuracy(y_test, y_pred)
    prec, rec, f1 = precision_recall_f1(y_test, y_pred)

    print(f"Test Accuracy:  {acc:.2%}")
    print(f"Precision:      {prec:.2%}")
    print(f"Recall:         {rec:.2%}")
    print(f"F1 Score:       {f1:.2%}")
    print()

    # Predict a sample
    sample = np.array([0.4, 0.6, 0.5])
    prediction = clf.predict(sample.reshape(1, -1))[0]
    print(f"The predicted class for the sample {[float(x) for x in sample]} is {prediction}.")
