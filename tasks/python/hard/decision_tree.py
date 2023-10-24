import numpy as np

class DecisionTreeClassifier:
    def __init__(self, max_depth=None):
        self.max_depth = max_depth
    
    def fit(self, X, y, depth=0):
        n_samples, n_features = X.shape
        unique_classes = np.unique(y)
        
        # Termination conditions
        if (len(unique_classes) == 1) or (depth == self.max_depth):
            return unique_classes[0]
        
        # Find the best split
        best_gini = 1.0
        best_split = None
        for feature_index in range(n_features):
            unique_values = np.unique(X[:, feature_index])
            for value in unique_values:
                left_indices = X[:, feature_index] < value
                right_indices = ~left_indices
                gini = self.calculate_gini(y[left_indices], y[right_indices])
                if gini < best_gini:
                    best_gini = gini
                    best_split = (feature_index, value, left_indices, right_indices)
        
        # Create subtrees
        if best_gini == 1.0:
            return unique_classes[np.argmax(np.bincount(y))]
        else:
            feature_index, value, left_indices, right_indices = best_split
            left_tree = self.fit(X[left_indices], y[left_indices], depth + 1)
            right_tree = self.fit(X[right_indices], y[right_indices], depth + 1)
            return (feature_index, value, left_tree, right_tree)
    
    def calculate_gini(self, left_y, right_y):
        left_size = len(left_y)
        right_size = len(right_y)
        total_size = left_size + right_size
        
        if total_size == 0:
            return 0
        
        p_left = left_size / total_size
        p_right = right_size / total_size
        
        gini_left = 1.0 - sum([(np.sum(left_y == c) / left_size) ** 2 for c in np.unique(left_y)])
        gini_right = 1.0 - sum([(np.sum(right_y == c) / right_size) ** 2 for c in np.unique(right_y)])
        
        gini = p_left * gini_left + p_right * gini_right
        return gini
    
    def predict(self, X):
        return np.array([self._predict_tree(x, self.tree) for x in X])
    
    def _predict_tree(self, x, tree):
        if isinstance(tree, np.int64):
            return tree
        feature_index, value, left_tree, right_tree = tree
        if x[feature_index] < value:
            return self._predict_tree(x, left_tree)
        else:
            return self._predict_tree(x, right_tree)

# Example usage
# Assuming X_train and y_train are your training data
X_train = np.array([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])
y_train = np.array([0, 1, 0, 1, 0])

# Create and train the decision tree classifier
clf = DecisionTreeClassifier(max_depth=2)
clf.tree = clf.fit(X_train, y_train)

# Predict using the trained classifier
X_test = np.array([[2, 3], [4, 5]])
predictions = clf.predict(X_test)
print("Predictions:", predictions)
