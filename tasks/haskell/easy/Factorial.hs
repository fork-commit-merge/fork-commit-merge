-- Haskell - Easy

main :: IO ()
main = do
    -- TODO: Implement a Haskell program that calculates the factorial of a number
putStrLn "Enter a number to calculate its factorial: "
input <- getLine
let n = read input :: Integer
let  result = factorial n
putStrLn $ "The factoruial of " ++ shown n ++ "is" ++ show result

--USE PRODUCT AND LIST GENERATION
factorial':: Integer -> Integer
factorial' n = product [1..n]

--using foldl
factorial'' :: Integer -> Integer
factorial'' n = foldl (*) 1 [1..n]