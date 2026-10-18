"""
Decision Tree Classifier from scratch (NumPy only).

Features
- Gini impurity as the split criterion
- Recursive tree building with max_depth / min_samples_split / min_samples_leaf
- fit() and predict() methods
- Text visualisation of the learned tree
- Evaluation on a train/test split: accuracy, precision, recall, confusion matrix

Run:
    python decision_tree.py
"""

import numpy as np


# --------------------------------------------------------------------------
# 1. Impurity and split search
# --------------------------------------------------------------------------
def gini_impurity(y):
    """Gini impurity of a label array: 1 - sum(p_k ** 2)."""
    if len(y) == 0:
        return 0.0
    _, counts = np.unique(y, return_counts=True)
    probabilities = counts / counts.sum()
    return 1.0 - np.sum(probabilities ** 2)


def best_split(X, y, min_samples_leaf=1):
    """
    Find the (feature, threshold) pair that gives the largest Gini gain.

    Returns (feature_index, threshold, gain). If no useful split exists,
    feature_index and threshold are None and gain is 0.0.
    """
    n_samples, n_features = X.shape
    parent_impurity = gini_impurity(y)

    best_feature, best_threshold, best_gain = None, None, 0.0

    for feature in range(n_features):
        values = np.unique(X[:, feature])
        if len(values) < 2:
            continue  # constant feature, nothing to split on

        # Candidate thresholds: midpoints between consecutive unique values
        thresholds = (values[:-1] + values[1:]) / 2.0

        for threshold in thresholds:
            left_mask = X[:, feature] <= threshold
            n_left = int(left_mask.sum())
            n_right = n_samples - n_left

            if n_left < min_samples_leaf or n_right < min_samples_leaf:
                continue

            weighted_impurity = (
                n_left * gini_impurity(y[left_mask])
                + n_right * gini_impurity(y[~left_mask])
            ) / n_samples
            gain = parent_impurity - weighted_impurity

            if gain > best_gain:
                best_feature, best_threshold, best_gain = feature, threshold, gain

    return best_feature, best_threshold, best_gain


# --------------------------------------------------------------------------
# 2. Tree structure
# --------------------------------------------------------------------------
class Node:
    """A tree node. Leaves have `value` set; internal nodes have a split."""

    def __init__(self, feature=None, threshold=None, left=None, right=None, value=None):
        self.feature = feature
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value  # predicted class for leaf nodes

    def is_leaf(self):
        return self.value is not None


class DecisionTree:
    """Decision tree classifier using Gini impurity."""

    def __init__(self, max_depth=5, min_samples_split=2, min_samples_leaf=1):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.min_samples_leaf = min_samples_leaf
        self.root = None
        self.n_features_ = None

    # ----- training -------------------------------------------------------
    def fit(self, X, y):
        X = np.asarray(X, dtype=float)
        y = np.asarray(y)
        self.n_features_ = X.shape[1]
        self.root = self._build(X, y, depth=0)
        return self

    @staticmethod
    def _majority_class(y):
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]

    def _build(self, X, y, depth):
        # Stop: pure node, too deep, or too few samples
        if (
            len(np.unique(y)) == 1
            or depth >= self.max_depth
            or len(y) < self.min_samples_split
        ):
            return Node(value=self._majority_class(y))

        feature, threshold, gain = best_split(X, y, self.min_samples_leaf)

        # Stop: no split improves purity
        if feature is None or gain <= 0.0:
            return Node(value=self._majority_class(y))

        left_mask = X[:, feature] <= threshold
        left = self._build(X[left_mask], y[left_mask], depth + 1)
        right = self._build(X[~left_mask], y[~left_mask], depth + 1)

        # Simplify: if both children are leaves predicting the same class,
        # the split is useless, so collapse it into a single leaf.
        if left.is_leaf() and right.is_leaf() and left.value == right.value:
            return Node(value=left.value)

        return Node(feature=feature, threshold=threshold, left=left, right=right)

    # ----- prediction -----------------------------------------------------
    def _predict_one(self, x, node):
        while not node.is_leaf():
            node = node.left if x[node.feature] <= node.threshold else node.right
        return node.value

    def predict(self, X):
        if self.root is None:
            raise ValueError("The tree has not been fitted yet. Call fit() first.")
        X = np.asarray(X, dtype=float)
        if X.ndim == 1:
            X = X.reshape(1, -1)
        return np.array([self._predict_one(x, self.root) for x in X])

    # ----- visualisation --------------------------------------------------
    def print_tree(self, feature_names=None):
        """Print the tree as indented text."""
        if self.root is None:
            print("(empty tree)")
            return

        def name(i):
            return feature_names[i] if feature_names else f"feature_{i}"

        def walk(node, indent):
            if node.is_leaf():
                print(f"{indent}-> class {node.value}")
                return
            print(f"{indent}if {name(node.feature)} <= {node.threshold:.3f}:")
            walk(node.left, indent + "    ")
            print(f"{indent}else:  # {name(node.feature)} > {node.threshold:.3f}")
            walk(node.right, indent + "    ")

        walk(self.root, "")

    def depth(self):
        def d(node):
            if node is None or node.is_leaf():
                return 0
            return 1 + max(d(node.left), d(node.right))

        return d(self.root)


# --------------------------------------------------------------------------
# 3. Data, split and metrics
# --------------------------------------------------------------------------
def make_dataset(n_per_class=150, seed=42):
    """
    Generate a reproducible 2-class dataset with 3 features.

    Each class is a cloud of points around a different centre, and the
    clouds overlap a little so the problem is not trivial.
    """
    rng = np.random.default_rng(seed)
    centre_0 = np.array([0.3, 0.3, 0.4])
    centre_1 = np.array([0.7, 0.7, 0.6])
    X0 = rng.normal(centre_0, 0.15, size=(n_per_class, 3))
    X1 = rng.normal(centre_1, 0.15, size=(n_per_class, 3))
    X = np.vstack([X0, X1])
    y = np.array([0] * n_per_class + [1] * n_per_class)
    return X, y


def train_test_split(X, y, test_size=0.2, seed=42):
    """Shuffle the data and split it into training and test sets."""
    rng = np.random.default_rng(seed)
    indices = rng.permutation(len(y))
    n_test = int(len(y) * test_size)
    test_idx, train_idx = indices[:n_test], indices[n_test:]
    return X[train_idx], X[test_idx], y[train_idx], y[test_idx]


def confusion_matrix(y_true, y_pred, classes):
    matrix = np.zeros((len(classes), len(classes)), dtype=int)
    for i, actual in enumerate(classes):
        for j, predicted in enumerate(classes):
            matrix[i, j] = np.sum((y_true == actual) & (y_pred == predicted))
    return matrix


def evaluate(y_true, y_pred):
    """Return accuracy and macro-averaged precision and recall."""
    classes = np.unique(np.concatenate([y_true, y_pred]))
    accuracy = np.mean(y_true == y_pred)

    precisions, recalls = [], []
    for c in classes:
        tp = np.sum((y_pred == c) & (y_true == c))
        fp = np.sum((y_pred == c) & (y_true != c))
        fn = np.sum((y_pred != c) & (y_true == c))
        precisions.append(tp / (tp + fp) if (tp + fp) > 0 else 0.0)
        recalls.append(tp / (tp + fn) if (tp + fn) > 0 else 0.0)

    return accuracy, float(np.mean(precisions)), float(np.mean(recalls)), classes


# --------------------------------------------------------------------------
# 4. Main
# --------------------------------------------------------------------------
def main():
    X, y = make_dataset()
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    print(f"Dataset: {X.shape[0]} samples, {X.shape[1]} features, "
          f"{len(np.unique(y))} classes")
    print(f"Training samples: {len(y_train)}, test samples: {len(y_test)}\n")

    tree = DecisionTree(max_depth=4, min_samples_split=4, min_samples_leaf=2)
    tree.fit(X_train, y_train)

    print(f"Learned tree (depth {tree.depth()}):")
    tree.print_tree(feature_names=["f0", "f1", "f2"])

    y_pred = tree.predict(X_test)
    accuracy, precision, recall, classes = evaluate(y_test, y_pred)

    print("\nTest set performance")
    print(f"  Accuracy : {accuracy:.3f}")
    print(f"  Precision: {precision:.3f} (macro average)")
    print(f"  Recall   : {recall:.3f} (macro average)")
    print("  Confusion matrix (rows = actual, columns = predicted):")
    print(confusion_matrix(y_test, y_pred, classes))

    sample = [0.4, 0.6, 0.5]
    prediction = tree.predict(sample)[0]
    print(f"\nThe predicted class for the sample {sample} is {prediction}.")


if __name__ == "__main__":
    main()
