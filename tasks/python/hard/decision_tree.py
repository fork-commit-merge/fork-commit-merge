"""A decision tree classifier written from scratch with NumPy — no scikit-learn.

Run from anywhere; the dataset is located relative to this file:

    python decision_tree.py

What is implemented, per the issue:

* Gini impurity and the weighted impurity of a candidate split
* a best-split search over every feature, at every midpoint threshold
* a ``DecisionTree`` class with ``fit``, ``predict`` and ``print_tree``
* a reproducible train/test split, and accuracy / precision / recall
"""
import numpy as np

FEATURE_NAMES = ("sepal length", "sepal width", "petal length", "petal width")
CLASS_NAMES = ("Iris-setosa", "Iris-versicolor", "Iris-virginica")
DATA_PATH = __file__.rsplit("/", 1)[0] + "/iris.data"


# ── impurity ────────────────────────────────────────────────────────────────
def gini_impurity(y):
    """Gini impurity of a label array: 0 for a pure node, →1−1/k for k even classes."""
    if len(y) == 0:
        return 0.0
    _, counts = np.unique(y, return_counts=True)
    p = counts / len(y)
    return 1.0 - np.sum(p ** 2)


def split_impurity(y_left, y_right):
    """Weighted Gini impurity of a split: the number a real split is judged by."""
    n = len(y_left) + len(y_right)
    if n == 0:
        return 0.0
    return (len(y_left) * gini_impurity(y_left) + len(y_right) * gini_impurity(y_right)) / n


# ── the split search ──────────────────────────────────────────────────────────
def best_split(X, y):
    """The (feature, threshold) with the lowest weighted Gini impurity.

    Thresholds are the midpoints between neighbouring sorted values: a split
    exactly on a data point is equivalent to one just above it for ``<=``, and
    midpoints avoid testing a value that cannot separate anything.
    """
    best = (None, None, float("inf"))
    for feature in range(X.shape[1]):
        values = np.unique(X[:, feature])
        if len(values) < 2:
            continue  # a constant feature cannot split anything
        for threshold in (values[:-1] + values[1:]) / 2:
            mask = X[:, feature] <= threshold
            impurity = split_impurity(y[mask], y[~mask])
            if impurity < best[2]:
                best = (feature, threshold, impurity)
    return best


# ── the tree ─────────────────────────────────────────────────────────────────
class Node:
    def __init__(self, feature=None, threshold=None, left=None, right=None, value=None):
        self.feature = feature
        self.threshold = threshold
        self.left = left
        self.right = right
        self.value = value  # a leaf holds a class; a split holds None


class DecisionTree:
    def __init__(self, max_depth=5, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.root = None

    def fit(self, X, y):
        self.root = self._build(X, y, depth=0)
        return self

    def _build(self, X, y, depth):
        # Pure, out of depth, out of samples: become a leaf either way.
        if len(np.unique(y)) == 1 or depth >= self.max_depth or len(y) < self.min_samples_split:
            return Node(value=self._most_common(y))

        feature, threshold, _ = best_split(X, y)
        if feature is None:  # every feature constant: no split exists
            return Node(value=self._most_common(y))

        mask = X[:, feature] <= threshold
        return Node(
            feature=feature,
            threshold=threshold,
            left=self._build(X[mask], y[mask], depth + 1),
            right=self._build(X[~mask], y[~mask], depth + 1),
        )

    @staticmethod
    def _most_common(y):
        values, counts = np.unique(y, return_counts=True)
        return values[np.argmax(counts)]

    def predict(self, X):
        return np.array([self._predict_one(x, self.root) for x in X])

    def _predict_one(self, x, node):
        if node.value is not None:
            return node.value
        return self._predict_one(x, node.left if x[node.feature] <= node.threshold else node.right)

    def print_tree(self, node=None, depth=0):
        if node is None:
            node = self.root
        if node.value is not None:
            print("  " * depth + f"→ {CLASS_NAMES[node.value]}")
            return
        print("  " * depth + f"{FEATURE_NAMES[node.feature]} ≤ {node.threshold:.1f} cm ?")
        self.print_tree(node.left, depth + 1)
        self.print_tree(node.right, depth + 1)


# ── data ─────────────────────────────────────────────────────────────────────
def load_iris(path=DATA_PATH):
    """Return (X, y): 150 samples, 4 features, 3 classes."""
    data = np.genfromtxt(path, delimiter=",", dtype=str)
    X = data[:, :4].astype(float)
    y = np.array([CLASS_NAMES.index(name) for name in data[:, 4]])
    return X, y


def train_test_split(X, y, test_ratio=0.2, seed=42):
    """Reproducible shuffle + split. Seeded so every run trains on the same rows."""
    rng = np.random.default_rng(seed)
    order = rng.permutation(len(y))
    X, y = X[order], y[order]
    cut = int(len(y) * (1 - test_ratio))
    return X[:cut], X[cut:], y[:cut], y[cut:]


# ── metrics ──────────────────────────────────────────────────────────────────
def classification_metrics(y_true, y_pred):
    """Accuracy, and macro-averaged precision / recall over the classes present."""
    classes = np.unique(y_true)
    precision = recall = 0.0
    for c in classes:
        tp = np.sum((y_true == c) & (y_pred == c))
        precision += tp / np.sum(y_pred == c) if np.sum(y_pred == c) else 0.0
        recall += tp / np.sum(y_true == c)
    return float(np.mean(y_true == y_pred)), precision / len(classes), recall / len(classes)


def per_class_report(y_true, y_pred):
    print(f"{'class':<18}{'precision':>10}{'recall':>8}{'support':>9}")
    for c in np.unique(y_true):
        tp = np.sum((y_true == c) & (y_pred == c))
        fp = np.sum((y_true != c) & (y_pred == c))
        p = tp / (tp + fp) if tp + fp else 0.0
        r = tp / np.sum(y_true == c)
        print(f"{CLASS_NAMES[c]:<18}{p:>10.3f}{r:>8.3f}{np.sum(y_true == c):>9}")


def main():
    X, y = load_iris()
    print(f"dataset: {X.shape[0]} samples · {X.shape[1]} features · {len(np.unique(y))} classes\n")

    X_train, X_test, y_train, y_test = train_test_split(X, y)
    print(f"train: {len(y_train)} samples · test: {len(y_test)} samples\n")

    tree = DecisionTree(max_depth=4).fit(X_train, y_train)
    print("the fitted tree:\n")
    tree.print_tree()
    print()

    y_pred = tree.predict(X_test)
    accuracy, precision, recall = classification_metrics(y_test, y_pred)
    print(f"accuracy : {accuracy:.3f}   ({np.sum(y_test == y_pred)}/{len(y_test)} correct)")
    print(f"precision: {precision:.3f} (macro)")
    print(f"recall   : {recall:.3f} (macro)\n")
    per_class_report(y_test, y_pred)


if __name__ == "__main__":
    main()
