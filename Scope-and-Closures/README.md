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

