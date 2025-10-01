## Arrays

An array is a collection of different data types which are ordered and changeable(modifiable). An array allows storing duplicate elements and different data types. An array can be empty, or it may have different data type values.

an array can store multiple values. Each value in an array has an index, and each index has a reference in a memory address. Each value can be accessed by using their indexes. The index of an array starts from zero, and the index of the last element is less by one from the length of the array.

### How to create an empty array

In JavaScript, we can create an array in different ways. Let us see different ways to create an array.

```bash
console.log("=== JavaScript Array Creation Demo ===");

// 1. Array Literal
let fruits = ["apple", "banana", "mango"];
console.log("Array Literal:", fruits);

// 2. Array Constructor
let numbers = new Array(1, 2, 3, 4);
console.log("Array Constructor:", numbers);

// Array constructor with single number (creates empty slots)
let emptyArr = new Array(5);
console.log("Array Constructor Single Number (empty slots):", emptyArr);

// 3. Array.of()
let arr1 = Array.of(7);
console.log("Array.of() single value:", arr1);
let arr2 = Array.of(1, 2, 3);
console.log("Array.of() multiple values:", arr2);

// 4. Array.from()
let str = "hello";
let chars = Array.from(str);
console.log("Array.from() from string:", chars);
let set = new Set([1, 2, 3]);
let arrFromSet = Array.from(set);
console.log("Array.from() from Set:", arrFromSet);

// 5. Spread Operator
let newFruits = [...fruits, "orange"];
console.log("Spread Operator:", newFruits);
let strArr = [..."world"];
console.log("Spread Operator from string:", strArr);

// 6. fill() with Array Constructor
let zeros = new Array(5).fill(0);
console.log("Array.fill():", zeros);

// 7. map() after Array.from()
let squares = Array.from({length: 5}, (v, i) => i * i);
console.log("Array.from() with map():", squares);

// 8. Multi-dimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Multi-dimensional Array:", matrix);

// Accessing multi-dimensional elements
console.log("matrix[1][2]:", matrix[1][2]); // 6

console.log("=== Demo Complete ===");

```

## Modifying array element

An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.

### 1. Modifying by Index

You can replace an element using its index:

```bash
let fruits = ["apple", "banana", "mango"];
fruits[1] = "grape"; // replace "banana" with "grape"
console.log(fruits); // ["apple", "grape", "mango"]
```

### 2. Adding Elements

```bash
let fruits = ["apple", "banana"];
fruits.push("mango"); // add at end
console.log(fruits); // ["apple", "banana", "mango"]
```

### 3. Removing Elements

```bash
let fruits = ["apple", "banana", "mango"];
fruits.pop();
console.log(fruits); // ["apple", "banana"]
```

### 4. Modifying All Elements

Create a new array with modified values:

```bash
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

```
