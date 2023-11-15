"use strict";
// Vitest - Easy
Object.defineProperty(exports, "__esModule", { value: true });
//! Don't modify this file
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, number) { return total + number; }, 0);
}
exports.default = sum;
var result = sum(1, 2, 3, 4, 5); // result will be 15
console.log(result);
