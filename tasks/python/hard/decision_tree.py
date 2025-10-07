from collections import Counter

import numpy as np


class Node:
    """
    Represents a node in the decision tree.

    Attributes:
        feature: Index of the feature to split on (None for leaf nodes)
        threshold: Threshold value for the split (None for leaf nodes)
        left: Left child node
        right: Right child node
        value: Class label for leaf nodes (None for internal nodes)
        gini: Gini impurity of the node
        samples: Number of samples at this node
        class_distribution: Distribution of classes at this node
    """

    def __init__(
        self,
        feature=None,
        threshold=None,
        left=None,
        right=None,
        value=None,
        gini=0.0,
        samples=0,
        class_distribution=None,
    ):
        self.feature = feature
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value
        self.gini = gini
        self.samples = samples
        self.class_distribution = class_distribution or {}


class DecisionTree:
    """
    Decision Tree Classifier implemented from scratch.

    Parameters:
        max_depth: Maximum depth of the tree (None for unlimited)
        min_samples_split: Minimum number of samples required to split a node
        min_samples_leaf: Minimum number of samples required at a leaf node
        criterion: Split criterion ('gini' or 'entropy')
    """

    def __init__(
        self, max_depth=None, min_samples_split=2, min_samples_leaf=1, criterion="gini"
    ):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.min_samples_leaf = min_samples_leaf
        self.criterion = criterion
        self.root = None
        self.n_classes_ = None
        self.n_features_ = None
        self.feature_names_ = None
        self.class_names_ = None

    def _calculate_gini(self, y):
        """
        Calculate Gini impurity for a set of labels.

        Gini impurity = 1 - Σ(p_i^2) where p_i is the probability of class i
        """
        if len(y) == 0:
            return 0.0

        _, counts = np.unique(y, return_counts=True)
        probabilities = counts / len(y)
        gini = 1.0 - np.sum(probabilities**2)
        return gini

    def _calculate_entropy(self, y):
        """
        Calculate entropy for a set of labels.

        Entropy = -Σ(p_i * log2(p_i)) where p_i is the probability of class i
        """
        if len(y) == 0:
            return 0.0

        _, counts = np.unique(y, return_counts=True)
        probabilities = counts / len(y)
        # Avoid log(0) by filtering out zero probabilities
        probabilities = probabilities[probabilities > 0]
        entropy = -np.sum(probabilities * np.log2(probabilities))
        return entropy

    def _calculate_impurity(self, y):
        """Calculate impurity based on the chosen criterion."""
        if self.criterion == "gini":
            return self._calculate_gini(y)
        elif self.criterion == "entropy":
            return self._calculate_entropy(y)
        else:
            raise ValueError(f"Unknown criterion: {self.criterion}")

    def _information_gain(self, y_parent, y_left, y_right):
        """
        Calculate information gain from a split.

        Information Gain = Impurity(parent) - [weighted_avg(Impurity(children))]
        """
        n = len(y_parent)
        n_left = len(y_left)
        n_right = len(y_right)

        if n_left == 0 or n_right == 0:
            return 0.0

        impurity_parent = self._calculate_impurity(y_parent)
        impurity_left = self._calculate_impurity(y_left)
        impurity_right = self._calculate_impurity(y_right)

        # Weighted average of children impurities
        weighted_impurity = (n_left / n) * impurity_left + (
            n_right / n
        ) * impurity_right

        # Information gain
        gain = impurity_parent - weighted_impurity
        return gain

    def _split(self, X, y, feature, threshold):
        """Split dataset based on a feature and threshold."""
        left_mask = X[:, feature] <= threshold
        right_mask = ~left_mask

        X_left, y_left = X[left_mask], y[left_mask]
        X_right, y_right = X[right_mask], y[right_mask]

        return X_left, X_right, y_left, y_right

    def _best_split(self, X, y):
        """
        Find the best split for a node.

        Returns:
            best_feature: Index of the best feature to split on
            best_threshold: Best threshold value for the split
            best_gain: Information gain from the best split
        """
        best_gain = -1
        best_feature = None
        best_threshold = None

        n_features = X.shape[1]

        # Try each feature
        for feature in range(n_features):
            # Get unique values as potential thresholds
            thresholds = np.unique(X[:, feature])

            # Try each threshold
            for threshold in thresholds:
                # Split the data
                X_left, X_right, y_left, y_right = self._split(X, y, feature, threshold)

                # Skip if split doesn't meet minimum samples requirement
                if (
                    len(y_left) < self.min_samples_leaf
                    or len(y_right) < self.min_samples_leaf
                ):
                    continue

                # Calculate information gain
                gain = self._information_gain(y, y_left, y_right)

                # Update best split if this is better
                if gain > best_gain:
                    best_gain = gain
                    best_feature = feature
                    best_threshold = threshold

        return best_feature, best_threshold, best_gain

    def _most_common_label(self, y):
        """Return the most common label in y."""
        counter = Counter(y)
        return counter.most_common(1)[0][0]

    def _get_class_distribution(self, y):
        """Get the distribution of classes in y."""
        counter = Counter(y)
        total = len(y)
        return {cls: count / total for cls, count in counter.items()}

    def _build_tree(self, X, y, depth=0):
        """
        Recursively build the decision tree.

        Returns:
            Node object representing the root of the (sub)tree
        """
        n_samples, n_features = X.shape
        n_labels = len(np.unique(y))

        # Calculate node statistics
        gini = self._calculate_gini(y)
        class_dist = self._get_class_distribution(y)

        # Stopping criteria
        if (
            (depth >= self.max_depth if self.max_depth else False)
            or n_labels == 1
            or n_samples < self.min_samples_split
        ):
            # Create leaf node
            leaf_value = self._most_common_label(y)
            return Node(
                value=leaf_value,
                gini=gini,
                samples=n_samples,
                class_distribution=class_dist,
            )

        # Find best split
        best_feature, best_threshold, best_gain = self._best_split(X, y)

        # If no valid split found, create leaf node
        if best_feature is None:
            leaf_value = self._most_common_label(y)
            return Node(
                value=leaf_value,
                gini=gini,
                samples=n_samples,
                class_distribution=class_dist,
            )

        # Split the data
        X_left, X_right, y_left, y_right = self._split(
            X, y, best_feature, best_threshold
        )

        # Recursively build left and right subtrees
        left_child = self._build_tree(X_left, y_left, depth + 1)
        right_child = self._build_tree(X_right, y_right, depth + 1)

        # Create internal node
        return Node(
            feature=best_feature,
            threshold=best_threshold,
            left=left_child,
            right=right_child,
            gini=gini,
            samples=n_samples,
            class_distribution=class_dist,
        )

    def fit(self, X, y, feature_names=None, class_names=None):
        """
        Fit the decision tree to the training data.

        Parameters:
            X: Training features (n_samples, n_features)
            y: Training labels (n_samples,)
            feature_names: Optional list of feature names for visualization
            class_names: Optional list of class names for visualization
        """
        X = np.array(X)
        y = np.array(y)

        self.n_classes_ = len(np.unique(y))
        self.n_features_ = X.shape[1]
        self.feature_names_ = feature_names or [
            f"Feature {i}" for i in range(self.n_features_)
        ]
        self.class_names_ = class_names or [
            f"Class {i}" for i in range(self.n_classes_)
        ]

        # Build the tree
        self.root = self._build_tree(X, y)

        return self

    def _predict_sample(self, x, node):
        """Predict the class label for a single sample."""
        # If leaf node, return the value
        if node.value is not None:
            return node.value

        # Otherwise, traverse the tree
        if x[node.feature] <= node.threshold:
            return self._predict_sample(x, node.left)
        else:
            return self._predict_sample(x, node.right)

    def predict(self, X):
        """
        Predict class labels for samples in X.

        Parameters:
            X: Samples to predict (n_samples, n_features)

        Returns:
            Array of predicted class labels
        """
        X = np.array(X)
        predictions = [self._predict_sample(x, self.root) for x in X]
        return np.array(predictions)

    def print_tree(self, node=None, depth=0, prefix="Root: "):
        """
        Print a text representation of the decision tree.

        Parameters:
            node: Current node (starts with root if None)
            depth: Current depth in the tree
            prefix: Prefix string for the current node
        """
        if node is None:
            node = self.root

        if node is None:
            print("Tree not trained yet!")
            return

        indent = "  " * depth

        # Print node information
        if node.value is not None:
            # Leaf node
            class_dist_str = ", ".join(
                [f"{cls}: {prob:.2f}" for cls, prob in node.class_distribution.items()]
            )
            print(
                f"{indent}{prefix}Predict: {node.value} "
                f"(gini: {node.gini:.3f}, samples: {node.samples}, [{class_dist_str}])"
            )
        else:
            # Internal node
            feature_name = (
                self.feature_names_[node.feature]
                if self.feature_names_
                else f"X[{node.feature}]"
            )
            print(
                f"{indent}{prefix}{feature_name} <= {node.threshold:.3f} "
                f"(gini: {node.gini:.3f}, samples: {node.samples})"
            )

            # Print left and right children
            self.print_tree(node.left, depth + 1, "Left: ")
            self.print_tree(node.right, depth + 1, "Right: ")

    def visualize_tree(self):
        """Alias for print_tree for better API consistency."""
        self.print_tree()

    def get_depth(self, node=None):
        """Get the depth of the tree."""
        if node is None:
            node = self.root

        if node is None or node.value is not None:
            return 0

        return 1 + max(self.get_depth(node.left), self.get_depth(node.right))

    def get_n_leaves(self, node=None):
        """Get the number of leaf nodes in the tree."""
        if node is None:
            node = self.root

        if node is None:
            return 0

        if node.value is not None:
            return 1

        return self.get_n_leaves(node.left) + self.get_n_leaves(node.right)


def load_iris_dataset():
    """
    Load a simple version of the Iris dataset.
    Returns X (features) and y (labels).
    """
    # Iris dataset (simplified version with 150 samples, 4 features, 3 classes)
    # Features: sepal length, sepal width, petal length, petal width
    # Classes: 0=setosa, 1=versicolor, 2=virginica

    np.random.seed(42)

    # Setosa (50 samples)
    setosa = np.random.randn(50, 4) * 0.3 + np.array([5.0, 3.4, 1.5, 0.2])

    # Versicolor (50 samples)
    versicolor = np.random.randn(50, 4) * 0.5 + np.array([6.0, 2.8, 4.5, 1.4])

    # Virginica (50 samples)
    virginica = np.random.randn(50, 4) * 0.5 + np.array([6.5, 3.0, 5.5, 2.0])

    # Combine
    X = np.vstack([setosa, versicolor, virginica])
    y = np.array([0] * 50 + [1] * 50 + [2] * 50)

    # Shuffle
    indices = np.random.permutation(150)
    X = X[indices]
    y = y[indices]

    feature_names = ["sepal_length", "sepal_width", "petal_length", "petal_width"]
    class_names = ["setosa", "versicolor", "virginica"]

    return X, y, feature_names, class_names


def train_test_split(X, y, test_size=0.3, random_state=42):
    """
    Split dataset into training and test sets.

    Parameters:
        X: Features
        y: Labels
        test_size: Proportion of test set (default 0.3)
        random_state: Random seed for reproducibility

    Returns:
        X_train, X_test, y_train, y_test
    """
    np.random.seed(random_state)
    n_samples = len(y)
    n_test = int(n_samples * test_size)

    # Shuffle indices
    indices = np.random.permutation(n_samples)
    test_indices = indices[:n_test]
    train_indices = indices[n_test:]

    X_train = X[train_indices]
    X_test = X[test_indices]
    y_train = y[train_indices]
    y_test = y[test_indices]

    return X_train, X_test, y_train, y_test


def calculate_accuracy(y_true, y_pred):
    """Calculate accuracy."""
    return np.mean(y_true == y_pred)


def calculate_precision_recall(y_true, y_pred, n_classes):
    """
    Calculate precision and recall for each class.

    Returns:
        Dictionary with precision and recall for each class
    """
    metrics = {}

    for cls in range(n_classes):
        # True positives: predicted as cls and actually cls
        tp = np.sum((y_pred == cls) & (y_true == cls))

        # False positives: predicted as cls but not actually cls
        fp = np.sum((y_pred == cls) & (y_true != cls))

        # False negatives: not predicted as cls but actually cls
        fn = np.sum((y_pred != cls) & (y_true == cls))

        # Calculate precision and recall
        precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
        recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0

        metrics[cls] = {
            "precision": precision,
            "recall": recall,
            "f1_score": (
                2 * (precision * recall) / (precision + recall)
                if (precision + recall) > 0
                else 0.0
            ),
        }

    return metrics


def print_evaluation_metrics(y_true, y_pred, class_names=None):
    """Print comprehensive evaluation metrics."""
    n_classes = len(np.unique(y_true))

    # Accuracy
    accuracy = calculate_accuracy(y_true, y_pred)
    print(f"\nAccuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")

    # Precision, Recall, F1-Score for each class
    metrics = calculate_precision_recall(y_true, y_pred, n_classes)

    print("\nPer-Class Metrics:")
    print("-" * 60)
    print(f"{'Class':<15} {'Precision':<12} {'Recall':<12} {'F1-Score':<12}")
    print("-" * 60)

    for cls in range(n_classes):
        class_name = class_names[cls] if class_names else f"Class {cls}"
        prec = metrics[cls]["precision"]
        rec = metrics[cls]["recall"]
        f1 = metrics[cls]["f1_score"]
        print(f"{class_name:<15} {prec:<12.4f} {rec:<12.4f} {f1:<12.4f}")

    # Macro averages
    avg_precision = np.mean([metrics[cls]["precision"] for cls in range(n_classes)])
    avg_recall = np.mean([metrics[cls]["recall"] for cls in range(n_classes)])
    avg_f1 = np.mean([metrics[cls]["f1_score"] for cls in range(n_classes)])

    print("-" * 60)
    print(
        f"{'Macro Avg':<15} {avg_precision:<12.4f} {avg_recall:<12.4f} {avg_f1:<12.4f}"
    )
    print("-" * 60)


if __name__ == "__main__":
    print("=" * 70)
    print("Decision Tree Classifier - Implementation from Scratch")
    print("=" * 70)

    # Load dataset
    print("\n1. Loading Iris Dataset...")
    X, y, feature_names, class_names = load_iris_dataset()
    print(f"   Dataset shape: {X.shape}")
    print(f"   Number of classes: {len(np.unique(y))}")
    print(f"   Features: {feature_names}")
    print(f"   Classes: {class_names}")

    # Split into training and test sets
    print("\n2. Splitting Dataset (70% train, 30% test)...")
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.3, random_state=42
    )
    print(f"   Training samples: {len(y_train)}")
    print(f"   Test samples: {len(y_test)}")

    # Train Decision Tree with Gini impurity
    print("\n3. Training Decision Tree (Gini Impurity)...")
    dt_gini = DecisionTree(
        max_depth=5, min_samples_split=2, min_samples_leaf=1, criterion="gini"
    )
    dt_gini.fit(X_train, y_train, feature_names=feature_names, class_names=class_names)
    print(f"   Tree depth: {dt_gini.get_depth()}")
    print(f"   Number of leaves: {dt_gini.get_n_leaves()}")

    # Make predictions
    print("\n4. Making Predictions on Test Set...")
    y_pred_gini = dt_gini.predict(X_test)

    # Evaluate
    print("\n5. Evaluation Metrics (Gini-based Tree):")
    print_evaluation_metrics(y_test, y_pred_gini, class_names)

    # Train Decision Tree with Entropy (Information Gain)
    print("\n" + "=" * 70)
    print("\n6. Training Decision Tree (Entropy/Information Gain)...")
    dt_entropy = DecisionTree(
        max_depth=5, min_samples_split=2, min_samples_leaf=1, criterion="entropy"
    )
    dt_entropy.fit(
        X_train, y_train, feature_names=feature_names, class_names=class_names
    )
    print(f"   Tree depth: {dt_entropy.get_depth()}")
    print(f"   Number of leaves: {dt_entropy.get_n_leaves()}")

    # Make predictions
    print("\n7. Making Predictions on Test Set...")
    y_pred_entropy = dt_entropy.predict(X_test)

    # Evaluate
    print("\n8. Evaluation Metrics (Entropy-based Tree):")
    print_evaluation_metrics(y_test, y_pred_entropy, class_names)

    # Visualize the tree structure
    print("\n" + "=" * 70)
    print(
        "\n9. Tree Structure Visualization (Gini-based, max_depth=3 for readability):"
    )
    print("=" * 70)
    dt_simple = DecisionTree(max_depth=3, criterion="gini")
    dt_simple.fit(
        X_train, y_train, feature_names=feature_names, class_names=class_names
    )
    dt_simple.visualize_tree()

    print("\n" + "=" * 70)
    print("Decision Tree Implementation Complete!")
    print("=" * 70)
