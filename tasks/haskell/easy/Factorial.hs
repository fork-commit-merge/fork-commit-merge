-- Haskell - Easy

factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

main :: IO ()
main = do
    putStrLn "Enter a number to calculate its factorial:"
    input <- getLine
    let n = read input :: Integer
    putStrLn $ "Factorial of " ++ show n ++ " is " ++ show (factorial n)
