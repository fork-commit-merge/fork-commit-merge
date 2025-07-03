import numpy as np

# TODO: Implement the Decision Tree Classifier using NumPy

class DecisionTreeClassifier:
    """
    Simple Decision Tree Classifier implementation using NumPy
    """
    
    def __init__(self, max_depth=3):
        self.max_depth = max_depth
        self.tree = None
    
    def _calculate_gini(self, y):
        """
        Calculate Gini impurity for a set of labels
        """
        if len(y) == 0:
            return 0
        
        # Count occurrences of each class
        unique, counts = np.unique(y, return_counts=True)
        probabilities = counts / len(y)
        
        # Calculate Gini impurity: 1 - sum(p_i^2)
        gini = 1 - np.sum(probabilities ** 2)
        return gini
    
    def _find_best_split(self, X, y):
        """
        Find the best split point for the data
        """
        best_gini = float('inf')
        best_feature = None
        best_threshold = None
        
        n_features = X.shape[1]
        
        for feature in range(n_features):
            # Get unique values for this feature
            thresholds = np.unique(X[:, feature])
            
            for threshold in thresholds:
                # Split data
                left_mask = X[:, feature] <= threshold
                right_mask = ~left_mask
                
                if np.sum(left_mask) == 0 or np.sum(right_mask) == 0:
                    continue
                
                # Calculate weighted Gini impurity
                left_gini = self._calculate_gini(y[left_mask])
                right_gini = self._calculate_gini(y[right_mask])
                
                left_weight = np.sum(left_mask) / len(y)
                right_weight = np.sum(right_mask) / len(y)
                
                weighted_gini = left_weight * left_gini + right_weight * right_gini
                
                if weighted_gini < best_gini:
                    best_gini = weighted_gini
                    best_feature = feature
                    best_threshold = threshold
        
        return best_feature, best_threshold
    
    def _create_leaf(self, y):
        """
        Create a leaf node with the most common class
        """
        unique, counts = np.unique(y, return_counts=True)
        return {'type': 'leaf', 'prediction': unique[np.argmax(counts)]}
    
    def _build_tree(self, X, y, depth=0):
        """
        Recursively build the decision tree
        """
        # Stop conditions
        if depth >= self.max_depth or len(np.unique(y)) == 1:
            return self._create_leaf(y)
        
        # Find best split
        best_feature, best_threshold = self._find_best_split(X, y)
        
        if best_feature is None:
            return self._create_leaf(y)
        
        # Split data
        left_mask = X[:, best_feature] <= best_threshold
        right_mask = ~left_mask
        
        # Create internal node
        node = {
            'type': 'internal',
            'feature': best_feature,
            'threshold': best_threshold,
            'left': self._build_tree(X[left_mask], y[left_mask], depth + 1),
            'right': self._build_tree(X[right_mask], y[right_mask], depth + 1)
        }
        
        return node
    
    def fit(self, X, y):
        """
        Train the decision tree classifier
        """
        X = np.array(X)
        y = np.array(y)
        self.tree = self._build_tree(X, y)
        return self
    
    def _predict_single(self, x, node):
        """
        Make prediction for a single sample
        """
        if node['type'] == 'leaf':
            return node['prediction']
        
        if x[node['feature']] <= node['threshold']:
            return self._predict_single(x, node['left'])
        else:
            return self._predict_single(x, node['right'])
    
    def predict(self, X):
        """
        Make predictions for multiple samples
        """
        X = np.array(X)
        predictions = []
        
        for x in X:
            predictions.append(self._predict_single(x, self.tree))
        
        return np.array(predictions)

# Test the implementation
if __name__ == "__main__":
    # Simple test data
    X = np.array([
        [1, 2],
        [2, 3],
        [3, 1],
        [4, 2],
        [5, 3],
        [6, 1]
    ])
    
    y = np.array([0, 0, 0, 1, 1, 1])
    
    # Create and train the classifier
    clf = DecisionTreeClassifier(max_depth=2)
    clf.fit(X, y)
    
    # Make predictions
    test_X = np.array([[2, 2], [5, 2]])
    predictions = clf.predict(test_X)
    
    print("Training data:")
    print("X:", X)
    print("y:", y)
    print("\nTest predictions:")
    print("Test X:", test_X)
    print("Predictions:", predictions)
