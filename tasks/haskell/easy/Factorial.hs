    -- TODO: Implement a Haskell program that calculates the factorial of a number
    
factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

main :: IO ()
main = do
  putStrLn "Enter a number:"
  input <- getLine
  let n = read input :: Integer
  putStrLn $ "Factorial of " ++ show n ++ " is " ++ show (factorial n)
