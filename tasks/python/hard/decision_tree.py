import numpy as np

class DecisionTree:
    def __init__(self, max_depth=None, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split

    def fit(self, X, y):
        self.tree_ = self._grow_tree(X, y)

    def _grow_tree(self, X, y, depth=0):
        n_samples, n_features = X.shape
        n_classes = len(np.unique(y))

        # Stopping criteria
        if (self.max_depth is not None and depth >= self.max_depth) or \
                (len(np.unique(y)) == 1) or \
                (len(y) < self.min_samples_split):
            leaf_value = self._most_common_label(y)
            return {'leaf': True, 'value': leaf_value}

        # Find the best split
        best_gain = -np.inf
        best_feature_idx = None
        best_threshold = None
        for feature_idx in range(n_features):
            thresholds = np.unique(X[:, feature_idx])
            for threshold in thresholds:
                gain = self._information_gain(X, y, feature_idx, threshold)
                if gain > best_gain:
                    best_gain = gain
                    best_feature_idx = feature_idx
                    best_threshold = threshold

        if best_gain == 0:
            leaf_value = self._most_common_label(y)
            return {'leaf': True, 'value': leaf_value}

        # Split the dataset
        left_indices = X[:, best_feature_idx] <= best_threshold
        right_indices = ~left_indices
        left_subtree = self._grow_tree(X[left_indices], y[left_indices], depth + 1)
        right_subtree = self._grow_tree(X[right_indices], y[right_indices], depth + 1)

        return {'leaf': False,
                'feature_idx': best_feature_idx,
                'threshold': best_threshold,
                'left': left_subtree,
                'right': right_subtree}

    def _information_gain(self, X, y, feature_idx, threshold):
        left_indices = X[:, feature_idx] <= threshold
        right_indices = ~left_indices

        left_impurity = self._gini_impurity(y[left_indices])
        right_impurity = self._gini_impurity(y[right_indices])

        n = len(y)
        left_weight = np.sum(left_indices) / n
        right_weight = np.sum(right_indices) / n

        return self._gini_impurity(y) - (left_weight * left_impurity + right_weight * right_impurity)

    def _gini_impurity(self, y):
        _, counts = np.unique(y, return_counts=True)
        probabilities = counts / len(y)
        return 1 - np.sum(probabilities ** 2)

    def _most_common_label(self, y):
        labels, counts = np.unique(y, return_counts=True)
        return labels[np.argmax(counts)]

    def predict(self, X):
        return np.array([self._predict_tree(x, self.tree_) for x in X])

    def _predict_tree(self, x, tree):
        if tree['leaf']:
            return tree['value']
        else:
            if x[tree['feature_idx']] <= tree['threshold']:
                return self._predict_tree(x, tree['left'])
            else:
                return self._predict_tree(x, tree['right'])
