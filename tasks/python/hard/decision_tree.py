import numpy as np
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split

class DecisionTreeClassifier:
    def __init__(self):
        self.tree = None

    def fit(self, X, y):
        self.labels = y
        self.tree = self._build_tree(X, y)

    def predict(self, X):
        return [self._traverse_tree(x, self.tree) for x in X]

    def _build_tree(self, X, y, depth=0, max_depth=10):
        if len(set(y)) == 1 or depth == max_depth:
            return {'label': max(set(y), key=list(y).count)}

        best_feat = self._best_split(X, y)
        tree = {'feature': best_feat}

        for value in set(X[:, best_feat]):
            value_indices = [index for index, x in enumerate(X) if x[best_feat] == value]
            subtree_X = X[value_indices]
            subtree_y = y[value_indices]
            tree[value] = self._build_tree(subtree_X, subtree_y, depth + 1, max_depth)

        return tree

    def _best_split(self, X, y):
        best_gini = float('inf')
        best_feat = -1

        for i in range(X.shape[1]):
            gini = self._gini_index(X[:, i], y)
            if gini < best_gini:
                best_gini = gini
                best_feat = i

        return best_feat

    def _gini_index(self, X, y):
        gini = 0.0
        for class_val in set(y):
            class_val_ratio = list(y).count(class_val) / len(y)
            gini += class_val_ratio * (1.0 - class_val_ratio)
        return gini

    def _traverse_tree(self, x, tree):
        if 'label' in tree:
            return tree['label']

        feature_value = x[tree['feature']]
        if feature_value in tree:
            return self._traverse_tree(x, tree[feature_value])
        else:
            return max(set(self.labels), key=list(self.labels).count)

    def print_tree(self, tree=None, indent=" "):
        if not tree:
            tree = self.tree

        if 'label' in tree:
            print(tree['label'])
        else:
            print()
            for sub_tree_key, sub_tree_value in tree.items():
                print(indent, sub_tree_key)
                self.print_tree(sub_tree_value, indent + indent)

# Load the Wine dataset
wine = load_wine()
X = wine.data
y = wine.target

# Split the dataset into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the classifier
clf = DecisionTreeClassifier()

# Train the classifier
clf.fit(X_train, y_train)

# Predict the classes of the test set
y_pred = clf.predict(X_test)

# Calculate the accuracy of the classifier
accuracy = np.sum(y_pred == y_test) / len(y_test)

# print(f"The accuracy of the classifier on the test set is {accuracy * 100:.2f}%.")
# 38.89%

# Define the sample
sample = X_test[0]

# Predict the class of the sample
predicted_class = clf.predict([sample])

# Print the predicted class
print(f"The predicted class for the sample {sample} is {predicted_class[0]}.")