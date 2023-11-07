# Python - Hard

import numpy as np


from sklearn.tree import DecisionTreeClassifier

#synthetic dataset
X = [[0.1, 0.2], [0.3, 0.4], [0.4, 0.6], [0.7, 0.8], [0.9, 0.1]]
y = [0, 0, 1, 1, 1]

clf = DecisionTreeClassifier(max_depth=1, random_state=42)
clf.fit(X, y)

sample = [[0.4, 0.6]]
predicted_class = clf.predict(sample)

print("Predicted class:", predicted_class[0])
