// JavaScript - Easy

// TODO: Write a function that returns the sum of two numbers
function sum(firstNumber, secondNumber) {

    let result;

    try {

        // Check if the inputs are numbers, otherwise throw an error
        if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {

            throw new TypeError('Both arguments must be numbers');
        }

        result = `The sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`;
    }
    catch (error) {

        result = `An error occurred while calculating the sum: ${error.message}`;
    }

    return result;
}