# Javascript Scope and Closures (Backend Class week 9)

## Introduction to scope
Scope in JavaScript is the area where a variable (or a function) exists and is accessible.

### Global Scope
In JavaScript a global scope has a variable that can be accessed from anywhere, these are avriables that are declared outside the function
example:

```javascript
var test_global = "Learning is fun";
let test_global1 = "LearnlyApp Tech is a fun learning plattform";
const test_global2 = "LearnlyApp";

function check_globals(){
    console.log(test_global);
        console.log(test_global1);
            console.log(test_global2);
}

check_globals();
```
this outputs:
```javascript
Learning is fun
LearnlyApp Tech is a fun learning plattform
LearnlyApp
```

### Local Scope
A local scope in JavaScript refers to the scope of varaibles that are defined within a specific block of code, generally within a function or a block statement.
example:

```javascript
function check_locals(){
    var test_local = "Learning is fun";
    let test_local1 = "LearnlyApp Tech is a fun learning platform";
    const test_local2 = "LearnlyApp";
    console.log(test_local);
    console.log(test_local1);
    }
    check_locals();
    console.log(test_loca2); //This will give a reference error 
```

this outputs:
```javascript
Learning is fun
LearnlyApp Tech is a fun learning plattform
LearnlyApp
```

### Function Scope
A function scope has variables that are declared inside a function that have a local scope this means that variables that are declared inside the function are not accessible outside the function.
example: 
```javascript
function check_funcScope(){
    var test_funcScope = "Learning is fun";
    let test_funcScope1 = "LearnlyApp Tech is a fun learning platform";
    const test_funcScope2 = "LearnlyApp";

    console.log(test_funcScope);
    console.log(test_funcScope1);
}

check_funcScope();
    console.log(test_funcScope); //This will give a reference Error
```

this outputs:
```javascript
Learning is fun
LearnlyApp Tech is a fun learning plattform
LearnlyApp
```

### Block Scope
A block scope refers to the scope of variables and functions that are defined within a block of code.
example:
```javascript
{
    var varaible_1 = "LearnlyApp";
    const varaible_2 = "LearnlyApp Tech is a fun learning platform";
    let x = 2;

    x*=2;

    console.log(x);
    console.log(varaible_1);
}

    console.log(varaible_2);
```

The output will give 2 and LearnlyApp and it will also give LearnlyApp Tech is a fun learning platform because we have succesfully accessed the varaible keyword because it doesn't have a block scope.

### Lexical Scope
A lexical scope has a variable that is declared inside the function and is only accesible inside that block or nested block 
example:
```javascript
function outsidefunc(){
    const out_variable = "Hello";

    function innerfunc(){
        const in_variable = "LearnlyApp";
        console.log(`${out_variable} ${in_variable}`);
    }
    in_variable();
}

outsidefunc();
```

The output will be Hello LearnlyApp.

### Closure 
A closure can be described as a combination of a function that is bundled together with references to it's surrounding state, In creating a closure i can gain access to an outer function.
Closures are automatically created everytime a function is defined.
example:
```javascript
function test(){
    let b = 1;
    function inner(){
        return b
    }
    return inner;
}

let get_inner = test();

console.log(get_inner())
console.log(get_inner())
console.log(get_inner())

# Todo-Task
Practical Examples of Closures: Real-World Applications

