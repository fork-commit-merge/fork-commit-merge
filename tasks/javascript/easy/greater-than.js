// JavaScript - Easy

// TODO: return a new array with all numbers greater than 10 but less than 20;

const array = [2, 5, 8, 10, 12, 15, 19, 20, 25];

const result = [];

for(i=0;i<array.length;i++){
    if(array[i] > 10 && array[i] < 20){
        result.push(array[i]);
    }
}

console.log(result);



// output: [12, 15, 19];
