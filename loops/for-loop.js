// print numbers out from 0 to 100
for (let i = 0; i < 100; i++) {
  console.log(i);
}

// print array using loop
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}

// toUpperCase
const countries02 = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries02.length; i++) {
  newArr.push(countries02[i].toUpperCase());
}

// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

// get sum of array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; // can be shorten, sum += numbers[i]
}

console.log(sum); // 15
