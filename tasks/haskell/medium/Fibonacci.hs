-- Haskell - Medium

-- TODO: Implement a Haskell program that calculates the Fibonacci sequence up to a given number
-- Fibonacci sequence up to a given number in Haskell

-- Function to calculate the Fibonacci sequence
fibonacci :: Int -> [Int]
fibonacci n = takeWhile (<= n) $ 0 : 1 : zipWith (+) fib (tail fib)
  where
    fib = fibonacci n

-- Main function to get input and display result
main :: IO ()
main = do
  putStrLn "Enter the number up to which you want to calculate the Fibonacci sequence:"
  input <- getLine
  let n = read input :: Int
  putStrLn $ "Fibonacci sequence up to " ++ show n ++ ": " ++ show (fibonacci n)
