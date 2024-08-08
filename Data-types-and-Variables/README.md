# Learnly app (Backend-Class week 4)
## Data types and Variables

- Understanding primitive data types:
    primitive data-types can be described as primitve data types that are already built-in e.g.
    </br>
    - Number
    - String
    - Boolean
    - Null
    - Undefined


# 1. strings:
A string are series of characters that are surrounded by quotes single or double e.g:
</br>
`let test_str = "Hello world"`
</br>
`let test_sttr2 = 'And hello JavaScript'`
</br>
`let sentence = `test_str $test_sttr2``

# 2. Booleans: 
Boolean have only two values that is true/false e.g:
</br>
`let isSunny = true;`
</br>
`let israin = false;`
</br>
 they are used to store yes/no values.

# 3. Numbers:
Numbers both contain integer and floating point numbers. e.g:
</br>
`let num = 2;`
</br>
`let num2 = 3.56`
</br>
`let num3 = Infinity`

# 4. Arrays and Objects
An array is a data-structure that is used to store multiple values in a single variable it is able to hold various data types e.g:

`let courses = [HTML,CSS,JS,React,AJAX,Jquery...]`
</br>
`console.log(courses)` this prints out `[HTML,CSS,JS,React,AJAX,Jquery...]`

An object holds a multiple values as properties, it allows us to group related data and functions together e.g:
</br>

```javascript
let school = {
    name: 'LearnlyApp',
    location: 'Lagos',
    date: '2024',
    displayInfo: function () {
        console.log(`${school.name} was established in ${school.date} at ${school.location}`);
    }
}

school.displayInfo();
```

# 5. Type Coercion
type coercion refers to the process of implicit/automatic conersions of values from one data type to another.
- conversing number to strings
- strings to numbers
- Booleans to numbers e.t.c

    ## Number to string conversion
    `let x = 10 + '20'`
    </br>
    `let y = '20' + 10`
    </br>
    `console.log(x)` prints out `1020`
    </br>
    `console.log(y)` prints out `2010`


    ## String to number conversion
    `let w = 10 - '5'`
    </br>
    `let x = 10 * '5'`
    </br>
    `let y = 10 / '5'`
    </br>
    `console.log(w)` this prints out 5
    </br>
    `console.log(x)` this prints out 50
    </br>
    `console.log(w)` this prints out 2
    </br>

# 6. Type checking
the (typeof) operator returns the data type of a variable or expression it returns a string stating the data typr used 
e.g:
</br>
```javascript
    const num = 10;
    const str = "Hello";
    const bool = true;
    const undef = undefined;
    const nul = null;
    const sym = Symbol("symbol");
    const bigInt = 9007199254740991n;

    console.log(typeof num) //this prints out number
    console.log(typeof str) //this prints out string
    console.log(typeof bool) //this prints out boolean
    console.log(typeof undef) //this prints out undefined
    console.log(typeof null) //this prints out object "because type of null is an oddity"
    console.log(typeof sym) //this prints out symbol
    console.log(typeof bigInt) //this prints out bigInt 
```

# 7. Hoisting
Hoisting is a behavior that where the interpreter moves the function and variable declerations to the top of their respective scope before executing the code during compilation phase.

e.g:
</br>
```javascript
    function hoistCode(){
        a = 10;
        let b = 30;
    }
    hoistCode();

    console.log(a); //this prints out 10
    console.log(b); //this prints out a reference error 
```

# 8. Constants and immutability
## constants:
A constant is used to define a variable that cannot be changed onced they have been assigned a value it does not allow redecleration of the same variable within the same block.

```javascript
const x = 22;
{
    const x = 90;
    console.log(x);

    {
        const x = 77;
        console.log(x);
    }
    {
        const x = 45;
        console.log(x);
    }
}
console.log(x);
```
## immutability:
immutable basically means something that cannot be changed. In programming, immutable is used to describe a value that cannot be changed after it's been set.