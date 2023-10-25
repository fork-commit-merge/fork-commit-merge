% Octave - Easy

% TODO: Implement a Octave script for calculating factorial
function result = factorial(n)
    if n == 0
        result = 1;
    else
        result = 1;
        for i = 1:n
            result = result * i;
        end
    end
end
n = input("Enter a non-negative integer: ");

if n < 0
    disp("Factorial is not defined for negative numbers.");
else
    result = factorial(n);
    disp(["The factorial of ", num2str(n), " is ", num2str(result)]);
end
