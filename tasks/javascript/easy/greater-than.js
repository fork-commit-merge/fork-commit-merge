// JavaScript - Easy

function filterGreaterThan10LessThan20(array) {
  return array.filter(num => num > 10 && num < 20);
}

const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];
console.log(filterGreaterThan10LessThan20(array));
