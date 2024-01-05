% Octave - Easy

% Function to calculate factorial
function result = factorial(n)
    if n == 0 || n == 1
        result = 1; % Base case: factorial of 0 and 1 is 1
    else
        result = n * factorial(n - 1); % Recursive case
    end
end

% Example usage
number = 5; % You can change this to any non-negative integer
result = factorial(number);
fprintf('The factorial of %d is %d\n', number, result);
