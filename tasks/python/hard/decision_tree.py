import numpy as np

class Node():
    def __init__(self, feature_index=None, threshold=None, left=None, right=None, info_gain=None, value=None):
        # For decision node
        self.feature_index = feature_index
        self.threshold = threshold
        self.left = left
        self.right = right
        self.info_gain = info_gain
        
        # For leaf node
        self.value = value

class DecisionTreeClassifier():
    def __init__(self, min_samples_split=2, max_depth=2):
        self.root = None
        self.min_samples_split = min_samples_split
        self.max_depth = max_depth
    
    # Function to build the tree
    def build_tree(self, dataset, curr_depth=0):
        X, Y = dataset[:,:-1], dataset[:,-1]
        num_samples, num_features = np.shape(X)
        
        if num_samples >= self.min_samples_split and curr_depth <= self.max_depth:
            best_split = self.get_best_split(dataset, num_samples, num_features)
            if best_split["info_gain"] > 0:
                left_subtree = self.build_tree(best_split["dataset_left"], curr_depth + 1)
                right_subtree = self.build_tree(best_split["dataset_right"], curr_depth + 1)
                return Node(feature_index=best_split["feature_index"], threshold=best_split["threshold"],
                            left=left_subtree, right=right_subtree, info_gain=best_split["info_gain"])
        
        leaf_value = self.calculate_leaf_value(Y)
        return Node(value=leaf_value)
    
    # Function to calculate the value for a leaf node
    def get_best_split(self, dataset, num_samples, num_features):
        best_split = {}
        max_info_gain = -float("inf")
        
        for feature_index in range(num_features):
            feature_values = dataset[:, feature_index]
            possible_thresholds = np.unique(feature_values)
            
            for threshold in possible_thresholds:
                dataset_left = np.array([row for row in dataset if row[feature_index] <= threshold])
                dataset_right = np.array([row for row in dataset if row[feature_index] > threshold])
                
                if len(dataset_left) > 0 and len(dataset_right) > 0:
                    y, left_y, right_y = dataset[:,-1], dataset_left[:,-1], dataset_right[:,-1]
                    curr_info_gain = self.information_gain(y, left_y, right_y)
                    
                    if curr_info_gain > max_info_gain:
                        best_split["feature_index"] = feature_index
                        best_split["threshold"] = threshold
                        best_split["dataset_left"] = dataset_left
                        best_split["dataset_right"] = dataset_right
                        best_split["info_gain"] = curr_info_gain
                        max_info_gain = curr_info_gain
        
        return best_split
    
    # Function to calculate the information gain
    def information_gain(self, parent, l_child, r_child):
        weight_l = len(l_child) / len(parent)
        weight_r = len(r_child) / len(parent)
        gain = self.entropy(parent) - (weight_l * self.entropy(l_child) + weight_r * self.entropy(r_child))
        return gain

    # Function to calculate the entropy
    def entropy(self, y):
        class_labels = np.unique(y)
        entropy = 0
        
        for cls in class_labels:
            p_cls = len(y[y == cls]) / len(y)
            entropy += -p_cls * np.log2(p_cls)
        
        return entropy
    
    # Function to calculate the value for a leaf node
    def calculate_leaf_value(self, Y):
        Y = list(Y)
        return max(Y, key=Y.count)
    
    # Function to fit the decision tree to the training data
    def fit(self, X, Y):
        Y = Y.reshape(-1, 1)
        dataset = np.concatenate((X, Y), axis=1)
        self.root = self.build_tree(dataset)
    
    # Function to make predictions
    def predict(self, X):
        predictions = [self.make_prediction(x, self.root) for x in X]
        return predictions
    
    def make_prediction(self, x, tree):
        if tree.value is not None:
            return tree.value
        
        feature_val = x[tree.feature_index]
        
        if feature_val <= tree.threshold:
            return self.make_prediction(x, tree.left)
        else:
            return self.make_prediction(x, tree.right)
    
    def calculate_gini(self, y):
        class_labels = np.unique(y)
        gini = 1
        
        for cls in class_labels:
            p_cls = len(y[y == cls]) / len(y)
            gini -= p_cls ** 2
        
        return gini
    
    def calculate_gini_impurity(self, parent, l_child, r_child):
        weight_l = len(l_child) / len(parent)
        weight_r = len(r_child) / len(parent)
        gini_impurity = self.calculate_gini(parent) - (weight_l * self.calculate_gini(l_child) + weight_r * self.calculate_gini(r_child))
        return gini_impurity
    

if __name__ == "__main__":
    from sklearn.datasets import load_iris
    from sklearn.model_selection import train_test_split
    from sklearn.metrics import accuracy_score
    # Load the iris dataset
    iris = load_iris()
    X, Y = iris.data, iris.target
    print("Dataset loaded successfully.")
    print("Dataset shape:", X.shape, Y.shape)
    # Split the dataset into training and testing sets
    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)
    # Create and fit the decision tree classifier
    clf = DecisionTreeClassifier(min_samples_split=3, max_depth=5)
    clf.fit(X_train, Y_train)
    print("Decision tree classifier trained successfully.")
    gini = clf.calculate_gini(Y_train)
    print("Gini impurity of the training set:", gini)
    gini_impurity = clf.calculate_gini_impurity(Y_train, X_train, X_test)
    print("Gini impurity of the split:", gini_impurity)
    # Make predictions on the test set
    Y_pred = clf.predict(X_test)
    # Calculate the accuracy of the model
    accuracy = accuracy_score(Y_test, Y_pred)
    print("Accuracy:", accuracy)