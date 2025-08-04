import numpy as np

class Node:
    def __init__(self, feature_index=None, threshold=None, left=None, right=None, value=None):
        self.feature_index = feature_index  
        self.threshold = threshold          
        self.left = left                    
        self.right = right                  
        self.value = value        

def gini_impurity(y):
    
    if len(y) == 0:
        return 0
    
    # Calculate the count of each unique class label
    class_counts = np.bincount(y) 
    
    
    probabilities = class_counts / len(y)  
    
    
    gini = 1 - np.sum(probabilities**2)  
    return gini

class DecisionTree:
    def __init__(self, max_depth=None, min_samples_split=2):
        self.max_depth = max_depth          # Maximum depth of the tree to prevent overfitting
        self.min_samples_split = min_samples_split 
        self.tree = None                    # The root node of the decision tree

    def _best_split(self, X, y):
        
        best_gini = 1  # Initialize best Gini impurity with a high value
        best_feature_index = None
        best_threshold = None

        for feature_index in range(X.shape[1]):
            thresholds = np.unique(X[:, feature_index]) 
            for threshold in thresholds:
                # Split the data into left and right subsets
                left_y = y[X[:, feature_index] <= threshold]
                right_y = y[X[:, feature_index] > threshold]

                
                gini = (len(left_y) / len(y)) * gini_impurity(left_y) + \
                       (len(right_y) / len(y)) * gini_impurity(right_y)
                
                # Update if this split is better
                if gini < best_gini:
                    best_gini = gini
                    best_feature_index = feature_index
                    best_threshold = threshold
        
        return best_feature_index, best_threshold

    def _build_tree(self, X, y, depth):
        # Base cases for recursion
        if len(np.unique(y)) == 1:  
            return Node(value=y[0])

        if self.max_depth is not None and depth >= self.max_depth: 
            return Node(value=np.bincount(y).argmax()) 
        
        if len(y) < self.min_samples_split: 
            return Node(value=np.bincount(y).argmax()) 
        
        # Find the best split
        feature_index, threshold = self._best_split(X, y)

        if feature_index is None:  
            return Node(value=np.bincount(y).argmax()) 

        # Recursively build left and right subtrees
        left_indices = X[:, feature_index] <= threshold
        right_indices = X[:, feature_index] > threshold
        left_subtree = self._build_tree(X[left_indices], y[left_indices], depth + 1)
        right_subtree = self._build_tree(X[right_indices], y[right_indices], depth + 1)

        return Node(feature_index, threshold, left_subtree, right_subtree)

    def fit(self, X, y):
        # Train the decision tree by building it recursively
        self.tree = self._build_tree(X, y, depth=0)

    def _predict_one(self, x, node):
        # Traverse the tree for a single sample
        if node.value is not None:
            return node.value

        if x[node.feature_index] <= node.threshold:
            return self._predict_one(x, node.left)
        else:
            return self._predict_one(x, node.right)

    def predict(self, X):
        # Make predictions for multiple samples
        predictions = [self._predict_one(x, self.tree) for x in X]
        return np.array(predictions)





### EXAMPLE
X = np.array([[2, 3, 1], [1, 2, 1], [3, 4, 3], [1, 1, 1], [4, 5, 3], [5, 2, 3]])
y = np.array([0, 0, 1, 0, 1, 1])
    

# Initialize and train the Decision Tree Classifier
tree_classifier = DecisionTree(max_depth=3) 
tree_classifier.fit(X, y)

# Make predictions on new data
new_data = np.array([[4, 3, 3]])
predictions = tree_classifier.predict(new_data)
print("The predicted class for the sample ", new_data ,"is ", predictions)

