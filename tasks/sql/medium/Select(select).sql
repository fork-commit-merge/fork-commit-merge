
-- |   Name       |  Continent  |     Area    |  Population  |     GDP     |
-- |--------------|-------------|-------------|--------------|-------------|

-- Using INNER JOIN rather using Subqueries for slight Optimization.

SELECT W1.Name, W1.Population
FROM World W1
JOIN World W2 ON W1.Population > W2.Population AND W2.Name = 'Canada'
JOIN World W3 ON W1.Population < W3.Population AND W3.Name = 'Poland';
