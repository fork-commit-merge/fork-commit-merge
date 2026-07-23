import numpy as np


class Node:
    def __init__(self, feature=None, threshold=None, left=None, right=None, *, value=None):
        self.feature = feature      # which column we split on
        self.threshold = threshold  # the split value
        self.left = left
        self.right = right
        self.value = value          # set only on leaf nodes (the predicted class)

    def is_leaf(self):
        return self.value is not None


class DecisionTreeClassifier:
    def __init__(self, max_depth=5, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root = None

    def fit(self, X, y):
        X = np.array(X)
        y = np.array(y)
        self.root = self._grow_tree(X, y, depth=0)

    def _gini(self, y):
        classes, counts = np.unique(y, return_counts=True)
        probabilities = counts / len(y)
        return 1 - np.sum(probabilities ** 2)

    def _best_split(self, X, y):
        best_gain = -1
        best_feature, best_threshold = None, None
        parent_gini = self._gini(y)
        n_samples, n_features = X.shape

        for feature in range(n_features):
            thresholds = np.unique(X[:, feature])
            for threshold in thresholds:
                left_mask = X[:, feature] <= threshold
                right_mask = ~left_mask

                if left_mask.sum() == 0 or right_mask.sum() == 0:
                    continue

                left_gini = self._gini(y[left_mask])
                right_gini = self._gini(y[right_mask])
                weighted_gini = (
                    left_mask.sum() / n_samples * left_gini
                    + right_mask.sum() / n_samples * right_gini
                )
                gain = parent_gini - weighted_gini

                if gain > best_gain:
                    best_gain = gain
                    best_feature = feature
                    best_threshold = threshold

        return best_feature, best_threshold, best_gain

    def _grow_tree(self, X, y, depth):
        n_samples = len(y)
        n_classes = len(np.unique(y))

        # stopping conditions
        if (
            depth >= self.max_depth
            or n_samples < self.min_samples_split
            or n_classes == 1
        ):
            leaf_value = self._most_common_label(y)
            return Node(value=leaf_value)

        feature, threshold, gain = self._best_split(X, y)

        if feature is None or gain <= 0:
            leaf_value = self._most_common_label(y)
            return Node(value=leaf_value)

        left_mask = X[:, feature] <= threshold
        right_mask = ~left_mask

        left_child = self._grow_tree(X[left_mask], y[left_mask], depth + 1)
        right_child = self._grow_tree(X[right_mask], y[right_mask], depth + 1)

        return Node(feature=feature, threshold=threshold, left=left_child, right=right_child)

    def _most_common_label(self, y):
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]

    def predict(self, X):
        X = np.array(X)
        return np.array([self._traverse(x, self.root) for x in X])

    def _traverse(self, x, node):
        if node.is_leaf():
            return node.value
        if x[node.feature] <= node.threshold:
            return self._traverse(x, node.left)
        return self._traverse(x, node.right)


#! Demo / self-test (small, deterministic dataset — no external data needed)
if __name__ == "__main__":
    # Simple 2-feature dataset, 2 classes, cleanly separable
    X_train = np.array([
        [2, 3], [1, 1], [4, 5], [6, 7],
        [7, 8], [8, 8], [1, 2], [3, 3],
    ])
    y_train = np.array([0, 0, 1, 1, 1, 1, 0, 0])

    clf = DecisionTreeClassifier(max_depth=3)
    clf.fit(X_train, y_train)

    predictions = clf.predict(X_train)
    accuracy = np.mean(predictions == y_train)

    print("Predictions:", predictions)
    print("Actual:     ", y_train)
    print(f"Training accuracy: {accuracy * 100:.1f}%")