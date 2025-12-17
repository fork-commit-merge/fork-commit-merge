const getEvenNumber = (array) => {
  return array.filter(num => num % 2 === 0)
}
console.log(getEvenNumber([1, 2, 3, 4, 5, 6, 7, 8,]));
