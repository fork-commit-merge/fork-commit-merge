-- Haskell - Easy

main :: IO ()
main = do
    putStrLn "Enter a number:"
    input <- getLine
    let number = read input :: Integer
    putStrLn $ "Factorial of " ++ show number ++ " is: " ++ show (factorial number)

factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)
