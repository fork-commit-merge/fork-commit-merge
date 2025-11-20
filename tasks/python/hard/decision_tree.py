import numpy as np
from collections import Counter

class DecisionTreeClassifier:
    """
    A Decision Tree Classifier implementation using NumPy.
    It supports classification tasks by recursively partitioning the data 
    based on the feature that yields the best Gini impurity reduction.
    """
    def __init__(self, max_depth=None, min_samples_split=2):
        """
        Initializes the Decision Tree Classifier.

        :param max_depth: The maximum depth of the tree.
        :param min_samples_split: The minimum number of samples required to split an internal node.
        """
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.tree = None

    def _gini_impurity(self, y):
        """
        Calculate the Gini impurity for a set of target values.

        Gini Impurity = 1 - sum(p_i^2) for each class i, 
        where p_i is the proportion of samples belonging to class i.
        """
        if y.size == 0:
            return 0
        
        # Count the occurrences of each class
        _, counts = np.unique(y, return_counts=True)
        
        # Calculate probabilities of each class
        probabilities = counts / len(y)
        
        # Calculate Gini impurity
        gini = 1.0 - np.sum(probabilities**2)
        return gini

    def _best_split(self, X, y):
        """
        Find the best feature and split threshold that maximizes information gain 
        (minimizes the weighted average of Gini impurity of the resulting children).
        """
        best_gain = -1
        best_feature_idx = None
        best_threshold = None
        n_features = X.shape[1]
        current_gini = self._gini_impurity(y)

        # Skip splitting if the node is pure (Gini is 0) or has too few samples
        if current_gini == 0 or len(y) < self.min_samples_split:
            return None, None

        for feature_idx in range(n_features):
            # Get unique values as potential thresholds for the current feature
            # Using unique values ensures we only test relevant split points
            thresholds = np.unique(X[:, feature_idx])

            for threshold in thresholds:
                # Split the data into left and right subsets
                left_mask = X[:, feature_idx] <= threshold
                y_left = y[left_mask]
                y_right = y[~left_mask]

                # Skip split if one side is empty
                if len(y_left) == 0 or len(y_right) == 0:
                    continue

                # Calculate weighted Gini impurity for the split
                gini_left = self._gini_impurity(y_left)
                gini_right = self._gini_impurity(y_right)
                
                n_left = len(y_left)
                n_right = len(y_right)
                n_total = len(y)

                # Weighted Gini of the split
                weighted_gini = (n_left / n_total) * gini_left + (n_right / n_total) * gini_right
                
                # Information Gain is reduction in Gini
                information_gain = current_gini - weighted_gini

                if information_gain > best_gain:
                    best_gain = information_gain
                    best_feature_idx = feature_idx
                    best_threshold = threshold
        
        return best_feature_idx, best_threshold

    def _build_tree(self, X, y, depth=0):
        """
        Recursively builds the decision tree.
        
        The node structure is: {'feature_idx': ..., 'threshold': ..., 'left': ..., 
                                'right': ..., 'value': ...}
        """
        # Base case 1: Node is pure (all same class)
        if len(np.unique(y)) == 1:
            return {'value': y[0]}

        # Base case 2: Maximum depth reached
        if self.max_depth is not None and depth >= self.max_depth:
            # Return the majority class as the leaf node value
            return {'value': Counter(y).most_common(1)[0][0]}

        # Base case 3: Too few samples to split
        if len(y) < self.min_samples_split:
            return {'value': Counter(y).most_common(1)[0][0]}

        # Find the best split
        feature_idx, threshold = self._best_split(X, y)

        # Base case 4: No good split found (e.g., all features tested, no gain)
        if feature_idx is None:
            return {'value': Counter(y).most_common(1)[0][0]}
        
        # Create a new internal node
        node = {'feature_idx': feature_idx, 'threshold': threshold}

        # Split the data
        left_mask = X[:, feature_idx] <= threshold
        X_left, y_left = X[left_mask], y[left_mask]
        X_right, y_right = X[~left_mask], y[~left_mask]
        
        # Recursively build left and right subtrees
        node['left'] = self._build_tree(X_left, y_left, depth + 1)
        node['right'] = self._build_tree(X_right, y_right, depth + 1)
        
        return node

    def fit(self, X, y):
        """
        Train the decision tree classifier.

        :param X: Training data features (NumPy array).
        :param y: Target values (NumPy array).
        """
        self.tree = self._build_tree(X, y)

    def _predict_sample(self, x, tree):
        """
        Traverse the tree to predict the class for a single sample.
        """
        # If the node is a leaf (has a 'value'), return the predicted class
        if 'value' in tree:
            return tree['value']
        
        # If it's an internal node, check the split condition
        feature_idx = tree['feature_idx']
        threshold = tree['threshold']
        
        if x[feature_idx] <= threshold:
            # Go to the left child
            return self._predict_sample(x, tree['left'])
        else:
            # Go to the right child
            return self._predict_sample(x, tree['right'])

    def predict(self, X):
        """
        Predict the class labels for the input samples.

        :param X: Test data features (NumPy array).
        :return: Predicted class labels (NumPy array).
        """
        if self.tree is None:
            raise RuntimeError("Model not trained. Call fit() first.")
            
        # Apply _predict_sample to every row of X
        predictions = np.array([self._predict_sample(x, self.tree) for x in X])
        return predictions

# --- Example Usage ---

# 1. Create a dummy dataset
# Features: [Size (sq ft), Bedrooms, Location_Score]
X_train = np.array([
    [1000, 2, 7],
    [1500, 3, 8],
    [500, 1, 4],
    [1200, 2, 9],
    [800, 1, 6],
    [2000, 4, 9],
    [600, 1, 3]
])
# Labels: 0 (Low Price), 1 (High Price)
y_train = np.array([0, 1, 0, 1, 0, 1, 0])

# 2. Initialize and Train the classifier
clf = DecisionTreeClassifier(max_depth=3, min_samples_split=2)
clf.fit(X_train, y_train)

# 3. Predict on new data
X_test = np.array([
    [1100, 2, 7], # Should be High Price (1)
    [550, 1, 5]   # Should be Low Price (0)
])

predictions = clf.predict(X_test)

# Expected output: [1, 0]
print("\n--- Example Output ---")
print(f"Test Data:\n{X_test}")
print(f"Predicted Labels: {predictions}")
print(f"Internal Tree Structure (Partial):\n{clf.tree}")