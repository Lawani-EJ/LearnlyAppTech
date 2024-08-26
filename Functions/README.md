# Fundamentals of functions (Backend Class Week7)

## Functions
Functions are reusable blocks of code that perform a specific task you define it once and then you can run/call it whenever the task is done.

### Its syntax
```javascript
    function TheNameOfTheFunction(Params1,Params2){
        //Th body goes here
    }
```

# The importance of functions
- Functions can be used multiple times, helping reducing redundancy.
- It breaks down complex problems into manageable pieces.
- It helps in managing the complexity by hiding the implementation details.
- Calling a function can be called in helping reducing it's redundancy solving problems recursively.

# Function Parameters
 Parameters are the additional information that passed into a function,  Parameters are enclosed with parenthesis and speared by commas.
```javascript
    function SumFunction(x,y){
        return x + y
    }
    console.log(SumFunction(80,20))
```
- The output is 100

# Function Arguments
Arguments in functions are those input values that are passed into the function when it is called, a function can accept zero or more arguments which can be used within the functions body to perform specific tasks or calculations

# Return Statements
In some situations in returning some values from a function after performing some operations, making use of the return statement is used. It is an optional statement and most of the time th last statement in a Javascript function.

# Function Expressions 
function expressions are similar to function declarations but without the function name.

### It's Syntax
```javascript
    let learnlyApp = function(number){
        return number * number
    };
    const x = square(4);
    console.log(x)
```
- THe output is 16

# Arrow functions
An arrow function is an anonymous way of writing functions in a shorter syntax, they are also known as lambda functions

### It's Syntax
```javascript
    const learnlyStudent = () => {
        console.log("Hello Student !");
    }
```

# Function Scope
A function scope in JavaScript is refered to the scope of variables and functions that are defined within a function

- Example:
```javascript
    function ScopeTest() {
        var x = 20; //This variable x has a function scope
        console.log(x) //And it's output is 20

            function InnerScopeTest() {
                console.log(x) // it's output is 20
            }
        InnerScopeTest();
    }
    ScopeTest();
    //console.log(x) performing this gives an error x is not defined
```
- The output is :
20
20

# To-Do Tasks
Write a function using the arrow function and function keyword that returns a summation of two values passed in as a parameter
 
## Solution
```javascript
const Sumcalculator = (x,y) =>{
    console.log(x + y)
}

Sumcalculator(80, 20);
```
