// modifying by index

let fruit = ["apple", "banana", "mango"];
fruit[1] = "cherry";
console.log(fruit);

//adding element using push

let number01 = [1, 2, 3, 4];
number01.push(10);
console.log(number01);

//remove last element using pop
let number02 = [1, 2, 3, 4, 5];
number02.pop();
console.log(number02);

//modifying all element using map method

let number = [1, 2, 3, 4];
let newNumber = number.map((n) => n * n);

console.log(newNumber);
