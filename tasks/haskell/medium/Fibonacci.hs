fibonacci :: Int -> [Int]
fibonacci n = take n fibs
  where fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
