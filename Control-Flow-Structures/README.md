# Control structures and Control flow

## Control flow
- Control flow is the order in which statements are executed in a program
- By default the control flow is for statements to be read and executed in order from left-to-right, top-to-bottom.

## Control statements
- control statements are statements that are used to determine the flow of control in a program.
- They enable conditional executions such as looping and branching, allowing the program to make decisions and execute different blocks of code based on various conditions.

- if else statements: 
    - The else if statement executes a block of code if a specified condition is true and another block if the condition is true.
```javascript
    let a = 5;
    if(a === 5){
        console.log("a is equal to 5");
    }else{
        console.log("a is not equal to 5");
    }
```

- if-else-if statement:
    - The if-else-if is used to execute one block of code if a specified condition is true another block of code if a specified condition is true, another if another is condition is true and a default block of code if none of the conditions are true. 
```javascript
    let a - 15
    if(a === 5){
        console.log("a is equal to 5")
    } else if(a === 10){
        console.log("a is equal to 10")
    }else{
        console.log("a is not eqaul to 5 or 10")
    }
```

- switch case statements:
    - The switch case statement is used to execute a block of code when a specified condition is true 
```javascript
    let a = 15
    switch (a){
        case 5:
            console.log("a is equal to 5");
            break;
        case 10:
            console.log("a is equal to 10");
            break;
        default:
            console.log("a is not equal to 5 or 10")
    }
```

- Ternary Operator:
    - The ternary operator is a shorthand for if-else statements. It is used to execute
```javascript
    let a - 10
    console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5")
```