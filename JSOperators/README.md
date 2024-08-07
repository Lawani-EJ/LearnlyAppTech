# Learnly app (Backend-Class week 5)
## Operators and expressions
- Operators:
    </br>
    In javascript operators are symbols that are used to help perform specific mathematical, comparisons, assignment and logical computations on operands.
    </br>

## Arithmetic operators:
- These operators perform arithmetic operations: addition(+), subtraction(-), multiplication(*), division(/), modulus(%), and  exponentiation(**).

    1. Additon(+): it performs additons on two operands, it can be also used to concantenate strings. e.g:
    </br>
    `x = "Hello" + "World"`
    prints out Hello world.

    2. subtraction(-) : it performs subtractions on two operands. e.g:
    </br>
    `test = 5-3`
    </br>
    ` console.log(test)`
     prints out 2.

    3. multiplication(*): it performs multiplications on two operands e.g.:
    </br>
    `multi = 5*5`
    </br>
    `Console.log(multi)` prints out 25

    4. division(/): it performs divisions on two operands it will divide the numerator by the denominator e.g. 
    </br>
    `divide = 5/5`
    </br>
    `Console.log(divide)` prints out 1

    5. modulus(%) : it gives a remainder of an integer division e.g:
    </br>
    `test01 = 5%4`
    </br>
    `Console.log(test01)` prints out 1

    6. exponentiation(**): this operator gives the power of the first operator raised to the second operator e.g:
    </br>
    `test02 = 5**3`
    </br>
    `Console.log(test02)` prints out 125

    7. increment(++): this operator increases the integer value by one. e.g. :
    </br>
    `let a = 10 `
    </br>
    `let x = a++`
    </br>
    `console.log(a)` prints out 11

    8. Decrement(--): this operator decreases the integer value by one e.g. :
    </br>
    `let y = 20`
    </br>
    `let z = y--`
    </br>
    `console.log(y)` prints out 19

    ## Assignement Operators:
    - The assignment operators evaluates the assigned value, chaining the assignment operator is possible in order to assign a single value to multiple variables.

        1. Assignment(=): this operator assigns the right value to the left operand. e.g.:
        </br>
        `let a = 11`
        </br>
        `let b = 13`

        2. Addition assignment(+=): this operator sums up the left and right operand values and assigns the result to the left operand. e.g:
        </br>
        `let y += 1`

        3. Subtraction assignment(-=): this operator subtracts the right side value from the left side value then assigns the result to the left operand e.g:
        </br>
        `let x = -= 3 `

        4. Multiplication assignment(*=): this operator multiplies the  variable by the value of the right operand and assigns the result to the variable. e.g:
        </br>
        `let e *= 8`

        5. Division operator(/=): this operator divides the variable by the value of the right operand and assigns the result to the variable. e.g:
        </br>
        `let z /= 6 `

    ## Comparison Operators:
    - These operators are mainly used to perform the logical operation that determines the equality or difference between the values.

        1. Equality(==): this operators compare the equality of two operands. if equal then the condition is true otherwise false. e.g:
        </br>
        `let y = 4`
        </br>
        `let z = 6`
        </br>
        `console.log(y==z)` this prints out false

        2. Strict eqaulity(===): this operand compares the equality of two operands with the type. if both values and type are equal then the condition is true otherwise it is false. e.g:
        </br>
        `let y = 5`
        </br>
        `let z = "5"`
        </br>
        `console.log(y === z)` this prints out false

        3. Inequality(!=): this compares the inequality of two operands, it will be true if operands are not equal. e.g:
        </br>
        `let x = 10`
        </br>
        `console.log(x!=11)` this prints out true

    ## Logical Operators:
    - logical operators are used for making decisions based on conditions and manipulating boolean values. They are used to compare values and set a termination for loops

        1. !(NOT)operator: this reverses the boolean result of the operand(or conditions) e.g:
        </br>
        `let i = 0`
        </br>
        `console.log((!i))` this prints out true
        </br>
        `console.log(!!i)` this prints out false

        2. &&(AND)operator: this accepts multiple arguments and then evaluates from left to right. e.g:
        </br>
        `let i = 0; j = 2; k = 3; l = 8;`
        </br>
        `console.log(Boolean(i&&j&&k))` this prints false
        </br>
        `console.log(Boolean(j&&k&&l))` this prints true

        3. ||(OR)operator: this is the opposite of the AND operator, it evaluates the operator from left to right and returns true even if one operand is true e.g:
        </br>
        `let = 1`
        </br>
        `let j = null`
        </br>
        `let k = undefined`
        </br>
        `let l = 0`
        </br>
        `console.log(Boolean(j||k));` this prints false
        </br>
        `console.log(Boolean(i||l))` this prints true

    ## Template literals:
    - template literals is a feature that allows us to create a string giving us more control over dynamic strings. They are created using the backtick(``) 
    e.g:
    </br>
    //without a template literal 
    </br>
    `console.log("This test has \n two lines")` this prints This text has </br> two lines
    </br>
    //With template literal
    </br>
    `console.log(`This test has 
    two lines`)` this prints This text has </br> two lines




