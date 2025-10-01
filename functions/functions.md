## JavaScript Functions

Functions are one of the core building blocks in JavaScript. They allow you to group code into reusable blocks, making programs cleaner, easier to read, and more maintainable.

## What is a Function?

A function is a reusable block of code that performs a specific task when called.

## Function Types in JavaScript

### 1. Function Declaration

Defined using the function keyword. Hoisted to the top of their scope.

```bash
function greet() {
  console.log("Hello World!");
}
greet(); // Hello World!
```

### 2. Function Expression

Stored inside a variable. Not hoisted.

```bash
const greet = function() {
  console.log("Hello from Function Expression!");
};
greet();
```

### 3. Arrow Functions

Shorter syntax, does not bind its own this.

```bash
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

```
