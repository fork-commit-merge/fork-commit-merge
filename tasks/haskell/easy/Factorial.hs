-- Haskell - Easy

main :: IO ()
main = do
    putStrLn "Enter a number:"
    input <- getLine
    let num = read input :: Integer
    let fact = product [1..num]
    putStrLn $ "Factorial of " ++ show num ++ " is " ++ show fact