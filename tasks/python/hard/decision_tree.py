import numpy as np

class DecisionTreeClassifier:
    """
    Simple Decision Tree Classifier implemented with NumPy only (CART using Gini impurity).
    
    Parameters
    ----------
    max_depth : int or None
        Maximum depth of the tree. If None, nodes are expanded until all leaves are pure
        or until no further splits are possible.
    min_samples_split : int
        Minimum number of samples required to split an internal node.
    """
    def __init__(self, max_depth=None, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.tree_ = None  # will store the learned tree

    # ====== Public API ====== #

    def fit(self, X, y):
        """
        Build the decision tree classifier from the training set (X, y).

        Parameters
        ----------
        X : ndarray of shape (n_samples, n_features)
            Training input samples.
        y : ndarray of shape (n_samples,)
            Target values (class labels).
        """
        X = np.asarray(X)
        y = np.asarray(y)
        self.n_classes_ = len(np.unique(y))
        self.n_features_ = X.shape[1]
        self.tree_ = self._grow_tree(X, y, depth=0)

    def predict(self, X):
        """
        Predict class for X.

        Parameters
        ----------
        X : ndarray of shape (n_samples, n_features)

        Returns
        -------
        y_pred : ndarray of shape (n_samples,)
            Predicted class labels.
        """
        X = np.asarray(X)
        return np.array([self._predict_one(row, self.tree_) for row in X])

    # ====== Core tree helpers ====== #

    def _grow_tree(self, X, y, depth):
        """
        Recursively grow the decision tree.
        Returns a node represented as a dictionary.
        """
        num_samples, num_features = X.shape
        num_labels = len(np.unique(y))

        # Stopping criteria
        if (self.max_depth is not None and depth >= self.max_depth) \
           or num_labels == 1 \
           or num_samples < self.min_samples_split:
            leaf_value = self._majority_class(y)
            return {
                "type": "leaf",
                "class": leaf_value
            }

        # Find the best split
        feature_idx, threshold, gain = self._best_split(X, y)

        # If no good split was found, make leaf
        if feature_idx is None:
            leaf_value = self._majority_class(y)
            return {
                "type": "leaf",
                "class": leaf_value
            }

        # Split the data
        left_mask = X[:, feature_idx] <= threshold
        right_mask = ~left_mask

        X_left, y_left = X[left_mask], y[left_mask]
        X_right, y_right = X[right_mask], y[right_mask]

        # Recursively build children
        left_child = self._grow_tree(X_left, y_left, depth + 1)
        right_child = self._grow_tree(X_right, y_right, depth + 1)

        # Return a decision node
        return {
            "type": "node",
            "feature_index": feature_idx,
            "threshold": threshold,
            "left": left_child,
            "right": right_child
        }

    def _best_split(self, X, y):
        """
        Find the best feature and threshold to split on based on Gini impurity.
        Returns (best_feature_index, best_threshold, best_gain).
        If no split improves impurity, returns (None, None, 0).
        """
        num_samples, num_features = X.shape
        if num_samples <= 1:
            return None, None, 0

        # Current impurity
        parent_impurity = self._gini(y)
        best_gain = 0.0
        best_feature = None
        best_threshold = None

        for feature_idx in range(num_features):
            # Sort data along this feature
            sorted_indices = np.argsort(X[:, feature_idx])
            X_sorted = X[sorted_indices]
            y_sorted = y[sorted_indices]

            # Potential split thresholds: midpoints between distinct values
            feature_values = X_sorted[:, feature_idx]
            unique_values = np.unique(feature_values)
            if len(unique_values) == 1:
                continue  # cannot split on a constant feature

            # Compute candidate thresholds as midpoints between adjacent unique values
            thresholds = (unique_values[:-1] + unique_values[1:]) / 2.0

            for threshold in thresholds:
                left_mask = feature_values <= threshold
                right_mask = ~left_mask

                if not left_mask.any() or not right_mask.any():
                    continue

                y_left = y_sorted[left_mask]
                y_right = y_sorted[right_mask]

                # Weighted Gini impurity
                impurity_left = self._gini(y_left)
                impurity_right = self._gini(y_right)
                n_left = len(y_left)
                n_right = len(y_right)
                n_total = n_left + n_right

                weighted_impurity = (n_left / n_total) * impurity_left + (n_right / n_total) * impurity_right

                # Information gain
                gain = parent_impurity - weighted_impurity

                if gain > best_gain:
                    best_gain = gain
                    best_feature = feature_idx
                    best_threshold = threshold

        return best_feature, best_threshold, best_gain

    def _gini(self, y):
        """
        Compute Gini impurity for a set of labels y.
        """
        if len(y) == 0:
            return 0.0
        _, counts = np.unique(y, return_counts=True)
        probabilities = counts / counts.sum()
        return 1.0 - np.sum(probabilities ** 2)

    def _majority_class(self, y):
        """
        Return the most common class label in y.
        """
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]

    def _predict_one(self, x, node):
        """
        Traverse the tree for a single sample x.
        """
        if node["type"] == "leaf":
            return node["class"]

        # Decision node
        feature_idx = node["feature_index"]
        threshold = node["threshold"]

        if x[feature_idx] <= threshold:
            return self._predict_one(x, node["left"])
        else:
            return self._predict_one(x, node["right"])
