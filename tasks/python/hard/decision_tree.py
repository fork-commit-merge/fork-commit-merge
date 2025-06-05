import numpy as np


class TreeNode:
    def __init__(self, index=None, value=None, left=None, right=None, output=None):
        self.index = index
        self.value = value
        self.left = left
        self.right = right
        self.output = output

    def is_leaf_TreeNode(self):
        return self.output is not None


class SimpleDecisionTree:
    def __init__(self, max_depth=5):
        self.max_depth = max_depth
        self.root = None

    def fit(self, X, y):
        X = np.array(X)
        y = np.array(y).reshape(-1, 1)
        
        dataset = np.hstack((X, y))
        self.root = self._build_tree(dataset.tolist(), 1)

    def _build_tree(self, dataset, depth):
        split = find_best_split(dataset)
        left, right = split['groups']
        del split['groups']

        if not left or not right:
            output = vote(left + right)
            return TreeNode(output=output)

        if depth >= self.max_depth:
            left_label = vote(left)
            right_label = vote(right)
            return TreeNode(
                index=split['index'],
                value=split['value'],
                left=TreeNode(output=left_label),
                right=TreeNode(output=right_label)
            )

        node = TreeNode(index=split['index'], value=split['value'])
        node.left = self._build_tree(left, depth + 1)
        node.right = self._build_tree(right, depth + 1)
        return node

        
    def predict(self, X):
        results = []
        for row in X:
            label = self._walk_tree(row, self.root)
            results.append(label)
        return results

    def _walk_tree(self, row, node):
        if node.output is not None:
            return node.output

        if row[node.index] < node.value:
            return self._walk_tree(row, node.left)
        else:
            return self._walk_tree(row, node.right)


def divide_on_feature(index, value, dataset):
    dataset = np.array(dataset)

    sub_left = dataset[dataset[:, index] < value]
    sub_right = dataset[dataset[:, index] >= value]
    
    return sub_left.tolist(), sub_right.tolist()

def calc_gini(groups, classes):
    samples = sum([len(sub_group) for sub_group in groups])
    gini_score = 0
    
    for sub_group in groups:
        n = len(sub_group)
        if n == 0:
            continue
        
        labels = np.array([row[-1] for row in sub_group])
        score = 0.0
    
        for class_val in classes:
            proportion = np.sum(labels == class_val) / n
            score += proportion * proportion
        
        gini_score += (1.0 - score) * (n / samples)

    return gini_score


def find_best_split(dataset):
    class_values = list(set(row[-1] for row in dataset))
    best_index = None
    best_value = None
    best_score = float('inf')
    best_groups = None
    
    for index in range(len(dataset[0]) - 1):
        for row in dataset:
            groups = divide_on_feature(index, row[index], dataset)
            gini = calc_gini(groups, class_values)
            
            if gini < best_score:
                best_index = index
                best_value = row[index]
                best_score = gini
                best_groups = groups
                
    return {
        'index': best_index,
        'value': best_value,
        'groups': best_groups
    }


def vote(group):
    labels = [row[-1] for row in group]
    return max(set(labels), key=labels.count)


# def show_tree(TreeNode, depth=0):
#     indent = "  " * depth
#     if TreeNode.output is not None:
#         print(f"{indent}[Leaf] Predict: {TreeNode.output}")
#     else:
#         print(f"{indent}[X{TreeNode.index} < {TreeNode.value}]")
#         show_tree(TreeNode.left, depth + 1)
#         show_tree(TreeNode.right, depth + 1)


if __name__ == "__main__":
    dataset = [
        [2.5, 1.0, 0],
        [1.3, 3.5, 1],
        [3.1, 2.9, 1],
        [0.9, 1.1, 0]
    ]

    X = [row[:-1] for row in dataset]
    y = [row[-1] for row in dataset]

    tree = SimpleDecisionTree(max_depth=3)
    tree.fit(X, y)

    sample = [0.4, 0.6]
    prediction = tree._walk_tree(sample, tree.root)
    print(f"The predicted class for the sample {sample} is {prediction}.")