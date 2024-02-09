import numpy as np

class DecisionTreeClassifier:
    def __init__(self, max_depth=None):
        self.max_depth = max_depth

    def fit(self, X, y):
        self.tree = self._grow_tree(X, y)

    def _grow_tree(self, X, y, depth=0):
        num_samples, num_features = X.shape
        num_classes = len(np.unique(y))

        # Stopping criteria
        if (self.max_depth is not None and depth >= self.max_depth) or num_classes == 1:
            return {'class': np.bincount(y).argmax(), 'depth': depth}

        # Find the best split
        best_gini = np.inf
        best_criteria = None  # Feature index and threshold
        best_sets = None  # Subsets of the data

        for feature_idx in range(num_features):
            thresholds = np.unique(X[:, feature_idx])
            for threshold in thresholds:
                left_indices = np.where(X[:, feature_idx] <= threshold)
                right_indices = np.where(X[:, feature_idx] > threshold)
                gini = (len(left_indices[0]) / num_samples) * self._gini_impurity(y[left_indices]) + \
                       (len(right_indices[0]) / num_samples) * self._gini_impurity(y[right_indices])

                if gini < best_gini:
                    best_gini = gini
                    best_criteria = (feature_idx, threshold)
                    best_sets = (left_indices, right_indices)

        # Create sub-trees
        left_tree = self._grow_tree(X[best_sets[0]], y[best_sets[0]], depth + 1)
        right_tree = self._grow_tree(X[best_sets[1]], y[best_sets[1]], depth + 1)

        return {'feature_idx': best_criteria[0],
                'threshold': best_criteria[1],
                'left': left_tree,
                'right': right_tree,
                'depth': depth}

    def _gini_impurity(self, y):
        num_samples = len(y)
        if num_samples == 0:
            return 0

        _, counts = np.unique(y, return_counts=True)
        probabilities = counts / num_samples
        gini = 1 - np.sum(probabilities ** 2)

        return gini

    def predict(self, X):
        return np.array([self._predict_tree(x, self.tree) for x in X])

    def _predict_tree(self, x, tree):
        if 'class' in tree:
            return tree['class']
        else:
            feature_idx = tree['feature_idx']
            threshold = tree['threshold']
            if x[feature_idx] <= threshold:
                return self._predict_tree(x, tree['left'])
            else:
                return self._predict_tree(x, tree['right'])

# Example usage:
X_train = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
y_train = np.array([0, 1, 1, 0])

clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

X_test = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
print(clf.predict(X_test))  # Output: [0 1 1 0]
