-- Haskell - Medium

-- TODO: Implement a Haskell program that calculates the Fibonacci sequence up to a given number
fibonacci :: Int ->[Int]
fibonacci n = takeWhile (<= n) fibs
  where 
    fibs = 0: 1: zipWith (+) fibs (tail fibs)

-- Main program
main :: IO ()
main = do

    putStrLn "Enter a number:"
    input <- getLine
    let num = read input :: Int
    putStrLn("Fibonacci sequence up to " ++ show num ++ ":")
    print (fibonacci num)