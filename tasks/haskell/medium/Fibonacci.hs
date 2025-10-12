-- Haskell - Medium

-- TODO: Implement a Haskell program that calculates the Fibonacci sequence up to a given number

-- Fibonacci.hs
-- Program to generate Fibonacci numbers up to a limit

fibonacci :: Integer -> [Integer]
fibonacci limit = takeWhile (<= limit) fibs
  where fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

main :: IO ()
main = do
    putStrLn "Enter the limit for Fibonacci numbers:"
    input <- getLine
    let limit = read input :: Integer
    putStrLn "Fibonacci numbers:"
    print (fibonacci limit)