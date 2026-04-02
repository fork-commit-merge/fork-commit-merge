SELECT Name, Population
FROM  World
WHERE Population > (SELECT Population FROM World WHERE Name = 'Canada')
AND Population < (SELECT Population FROM World WHERE Name = 'Poland');
