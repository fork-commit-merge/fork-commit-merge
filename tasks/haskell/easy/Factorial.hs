-- Haskell - Easy

main :: IO ()
main = do
    -- TODO: Implement a Haskell program that calculates the factorial of a number
main :: IO ()
main = do
    putStrLn "Enter a number:"
    input <- getLine
    let number = read input :: Integer
        factorialResult = factorial number
    putStrLn $ "Factorial of " ++ show number ++ " is: " ++ show factorialResult

factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)
