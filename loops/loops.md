## Loops

In programming, we often need to repeat a certain task multiple times. Instead of writing the same code again and again, we use loops.

A loop is a control structure that repeats a block of code as long as a specified condition is true. Once the condition becomes false, the loop stops.

Imagine if I ask you to print out from 0 to 100 using console.log(). To implement this simple task it may take you 2 to 5 minutes, such kind of tedious and repetitive task can be carried out using loop.

### for Loop

```bash
// For loop structure
for(initialization, condition, increment/decrement){
  // code goes here
}
```

```bash
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5
```

```bash
for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0
```
