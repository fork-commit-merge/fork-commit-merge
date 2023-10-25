# Python - Hard
import math
import numpy as np
class DecisionTree():
    """ Form a basic decision tree """
    def __init__(self, x, y, idxs=None, oob_idxs=None, 
                 min_leaf=5, feat_proportion=1.0):
        if idxs is None:
            idxs = np.arange(len(y))
        self.x = x
        self.y = y
        self.idxs = idxs
        self.oob_idxs = oob_idxs
        self.min_leaf = min_leaf
        self.feat_proportion = feat_proportion
        self.rows = len(idxs)
        self.cols = self.x.shape[1]
        self.val = np.mean(y[idxs])
        self.score = float('inf')
        self.binary_split()
    
    
    def __repr__(self):
        """ String reputation of our decision tree """
        text = f'n: {self.rows}, val: {self.val}'
        if not self.is_leaf:
            text += f', score: {self.score}, split: {self.split}, var: {self.split_name}'
        return text
    
    
    def binary_split(self):
        """ find best feature and level to split at to produce greatest
            reduction in variance """
        
        # randomly select sub-sample of features
        num_feat = int(np.ceil(self.cols*self.feat_proportion))
        col_idxs = range(self.cols)
        feature_subset = np.random.permutation(col_idxs)[:num_feat]
        
        # iteratively split each col and find best
        for i in feature_subset:
            self.best_binary_split(i)
        # if leaf node stop
        if self.score == float('inf'):
            return
        
        # get split col and idxs for lhs and rhs splits
        x = self.split_col_values
        lhs = np.nonzero(x <= self.split)[0]
        rhs = np.nonzero(x > self.split)[0]
        
        # create new decision trees for each split
        self.left_split = DecisionTree(self.x, self.y, self.idxs[lhs])
        self.right_split = DecisionTree(self.x, self.y, self.idxs[rhs])
            
            
    def best_binary_split(self, feat_idx):
        """ Find best binary split for the given feature """
        x = self.x.values[self.idxs, feat_idx]
        y = self.y[self.idxs]
        
        # sort our data
        sorted_ind = np.argsort(x)
        sorted_x = x[sorted_ind]
        sorted_y = y[sorted_ind]
        
        # get count, sum and square sum of lhs and rhs
        lhs_count = 0
        rhs_count = self.rows
        lhs_sum = 0.0
        rhs_sum = sorted_y.sum()
        lhs_sum2 = 0.0
        rhs_sum2 = np.square(sorted_y).sum()
        
        # iterate through all values of selected feature - eval score
        for i in range(0, self.rows - self.min_leaf):
            x_i = sorted_x[i]
            y_i = sorted_y[i]
            
            # update count and sums
            lhs_count += 1
            rhs_count -= 1   
            lhs_sum += y_i
            rhs_sum -= y_i
            lhs_sum2 += y_i**2
            rhs_sum2 -= y_i**2
            
            # if less than min leaf or dup value - skip
            if i < self.min_leaf - 1 or x_i == sorted_x[i + 1]:
                continue
            
            # find standard deviations of left and right sides
            lhs_std = self.standard_deviation(lhs_count, lhs_sum, lhs_sum2)
            rhs_std = self.standard_deviation(rhs_count, rhs_sum, rhs_sum2)
            
            # find weighted score
            current_score = (lhs_count*lhs_std) + (rhs_count*rhs_std)
            
            # if score lower (better) than previous, update
            if current_score < self.score:
                self.feat_idx = feat_idx
                self.score = current_score
                self.split = x_i
    
    
    def standard_deviation(self, n, summed_vals, summed_vals_squared):
        """ Standard deviation using summed vals, sum of squares, and data size """
        return np.sqrt((summed_vals_squared / n) - np.square(summed_vals / n))
    
    
    def predict(self, x):
        """ Find and return predictions for all the samples in x """
        return np.array([self.predict_sample(x_i) for x_i in x])
    
    
    def predict_sample(self, x_i):
        """ Take a sample x_i and return the predicted value using recursion """
        # if leaf node - return mean value
        if self.is_leaf:
            return self.val
        
        # if value less than tree split value lhs, else rhs
        elif x_i[self.feat_idx] <= self.split:
            tree = self.left_split
        else:
            tree = self.right_split
            
        # recursively continue through the tree with x_i until leaf node
        return tree.predict_sample(x_i)
    
    
    @property
    def split_name(self):
        """ return name of column we are splitting on """
        return self.x.columns[self.feat_idx]
    
    
    @property
    def split_col_values(self):
        """ return values of column we have split on """
        return self.x.values[self.idxs, self.feat_idx]
    
    
    @property
    def is_leaf(self):
        """ If leaf node, score will be infinity """
        return self.score == float('inf')
# TODO: Implement the Decision Tree Classifier using NumPy

