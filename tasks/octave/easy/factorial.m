% Octave - Easy

% Implement a Octave script for calculating factorial
function result = factorial_calc(n)
    if n <= 1
        result = 1;
    else
        result = n * factorial_calc(n - 1);
    endif
endfunction

% Test the function
n = 5;
result = factorial_calc(n);
fprintf('Factorial of %d is %d\n', n, result);
