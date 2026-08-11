import numpy as np

# TODO: Implement the Decision Tree Classifier using NumPy
def gini_impurity(y):
    """
    Calculate the Gini impurity of a set of labels.
    """
    if len(y) == 0:
        return 0

    _, counts = np.unique(y, return_counts=True)
    probabilities = counts / len(y)

    return 1 - np.sum(probabilities ** 2)
def split_gini(y_left, y_right):
    """
    Calculate the weighted Gini impurity after a split.
    """
    total = len(y_left) + len(y_right)

    if total == 0:
        return 0

    left_weight = len(y_left) / total
    right_weight = len(y_right) / total

    return (
        left_weight * gini_impurity(y_left)
        + right_weight * gini_impurity(y_right)
    )
def best_split(X, y):
    """
    Find the feature and threshold that produce
    the lowest weighted Gini impurity.
    """
    best_feature = None
    best_threshold = None
    best_gini = float("inf")

    n_samples, n_features = X.shape

    for feature in range(n_features):

        values = np.unique(X[:, feature])

        if len(values) < 2:
               continue

        thresholds = (values[:-1] + values[1:]) / 2


        for threshold in values:

            left_mask = X[:, feature] <= threshold
            right_mask = X[:, feature] > threshold

            y_left = y[left_mask]
            y_right = y[right_mask]

            if len(y_left) == 0 or len(y_right) == 0:
                continue

            current_gini = split_gini(y_left, y_right)

            if current_gini < best_gini:
                best_gini = current_gini
                best_feature = feature
                best_threshold = threshold

    return best_feature, best_threshold, best_gini
def classification_metrics(y_true, y_pred):
    """
    Calculate accuracy, macro-averaged precision, and recall
    for multiclass classification.
    """
    accuracy = np.mean(y_true == y_pred)

    classes = np.unique(y_true)

    precisions = []
    recalls = []

    for cls in classes:
        true_positive = np.sum(
            (y_true == cls) & (y_pred == cls)
        )

        false_positive = np.sum(
            (y_true != cls) & (y_pred == cls)
        )

        false_negative = np.sum(
            (y_true == cls) & (y_pred != cls)
        )

        precision = (
            true_positive / (true_positive + false_positive)
            if (true_positive + false_positive) > 0
            else 0
        )

        recall = (
            true_positive / (true_positive + false_negative)
            if (true_positive + false_negative) > 0
            else 0
        )

        precisions.append(precision)
        recalls.append(recall)

    macro_precision = np.mean(precisions)
    macro_recall = np.mean(recalls)

    return accuracy, macro_precision, macro_recall
        
def load_iris_dataset(filename="tasks/python/hard/iris.data"):
    """
    Load the Iris dataset using NumPy.
    """
    data = np.genfromtxt(
        filename,
        delimiter=",",
        dtype=str
    )

    X = data[:, :4].astype(float)

    labels = data[:, 4]

    class_mapping = {
        "Iris-setosa": 0,
        "Iris-versicolor": 1,
        "Iris-virginica": 2
    }

    y = np.array([class_mapping[label] for label in labels])

    return X, y

class Node:
    def __init__(
        self,
        feature=None,
        threshold=None,
        left=None,
        right=None,
        value=None
    ):
        self.feature = feature
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value
class DecisionTree:
    def __init__(self, max_depth=5, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root = None
    def fit(self, X, y):
        self.root = self._build_tree(X, y, depth=0)
        return self
    def _build_tree(self, X, y, depth):
        n_samples = len(y)

        # If all samples belong to one class
        if len(np.unique(y)) == 1:
            return Node(value=y[0])

        # Stop conditions
        if (
            depth >= self.max_depth
            or n_samples < self.min_samples_split
        ):
            return Node(value=self._most_common_class(y))

        feature, threshold, gini = best_split(X, y)

        # No useful split found
        if feature is None:
            return Node(value=self._most_common_class(y))

        left_mask = X[:, feature] <= threshold
        right_mask = X[:, feature] > threshold

        left_child = self._build_tree(
            X[left_mask],
            y[left_mask],
            depth + 1
        )

        right_child = self._build_tree(
            X[right_mask],
            y[right_mask],
            depth + 1
        )

        return Node(
            feature=feature,
            threshold=threshold,
            left=left_child,
            right=right_child
        )
    def _most_common_class(self, y):
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]
    def predict(self, X):
        return np.array([
            self._predict_sample(sample, self.root)
            for sample in X
        ])
    def _predict_sample(self, sample, node):
        if node.value is not None:
            return node.value

        if sample[node.feature] <= node.threshold:
            return self._predict_sample(sample, node.left)

        return self._predict_sample(sample, node.right)
    def print_tree(self, node=None, depth=0):
        if node is None:
            node = self.root

        if node.value is not None:
            print("  " * depth + f"Predict: {node.value}")
            return

        print(
            "  " * depth
            + f"Feature {node.feature} <= {node.threshold}"
        )

        self.print_tree(node.left, depth + 1)
        self.print_tree(node.right, depth + 1)
if __name__ == "__main__":

    X, y = load_iris_dataset()

    print("Dataset shape:", X.shape)
    print("Number of classes:", len(np.unique(y)))

    # Shuffle the dataset reproducibly
    np.random.seed(42)
    indices = np.random.permutation(len(X))

    X = X[indices]
    y = y[indices]

    # 80% training, 20% testing
    split_index = int(0.8 * len(X))

    X_train = X[:split_index]
    y_train = y[:split_index]

    X_test = X[split_index:]
    y_test = y[split_index:]

    tree = DecisionTree(max_depth=5)

    tree.fit(X_train, y_train)

    predictions = tree.predict(X_test)

    print("Actual:   ", y_test)
    print("Predicted:", predictions)

    accuracy, precision, recall = classification_metrics(
        y_test,
        predictions
    )

    print("Accuracy:", accuracy)
    print("Precision:", precision)
    print("Recall:", recall)

    print("\nDecision Tree:")
    tree.print_tree()