-- SQL - Medium

-- # Which country has a population that is more than Canada but less than Poland? Show the name and the population.
-- # use SELECT within SELECT.

-- sample table :

-- World (Name,Continent,Area,Population,GDP);

-- |   Name       |  Continent  |     Area    |  Population  |     GDP     |
-- |--------------|-------------|-------------|--------------|-------------|
SELECT Name, Population
FROM World
WHERE Population > (SELECT Population FROM World WHERE Name = 'Canada') 
 AND Population < (SELECT Population FROM World WHERE Name = 'Poland');

