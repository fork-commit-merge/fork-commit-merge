import numpy as np

class DecisionTreeClassifier:
    def __init__(self):
        self.feature = None
        self.threshold = None
        self.left_class = None
        self.right_class = None

    def fit(self, X, y):
        best_accuracy = 0

        for feature in range(X.shape[1]):
            thresholds = np.unique(X[:, feature])

            for threshold in thresholds:
                left = y[X[:, feature] <= threshold]
                right = y[X[:, feature] > threshold]

                if len(left) == 0 or len(right) == 0:
                    continue

                left_class = np.bincount(left).argmax()
                right_class = np.bincount(right).argmax()

                predictions = np.where(
                    X[:, feature] <= threshold,
                    left_class,
                    right_class
                )

                accuracy = np.mean(predictions == y)

                if accuracy > best_accuracy:
                    best_accuracy = accuracy
                    self.feature = feature
                    self.threshold = threshold
                    self.left_class = left_class
                    self.right_class = right_class

    def predict(self, X):
        return np.where(
            X[:, self.feature] <= self.threshold,
            self.left_class,
            self.right_class
        )


# Example Dataset
X = np.array([
    [2, 3],
    [1, 5],
    [3, 2],
    [6, 8],
    [7, 9],
    [8, 7]
])

y = np.array([0, 0, 0, 1, 1, 1])

# Train Model
model = DecisionTreeClassifier()
model.fit(X, y)

# Test Data
X_test = np.array([
    [2, 4],
    [7, 8],
    [5, 6]
])

predictions = model.predict(X_test)

print("Predictions:", predictions)
