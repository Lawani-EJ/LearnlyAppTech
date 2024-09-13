# Objects and Object-oriented Programming (Week 10)

## Objects
Objects are entities that are unique and contain properties and methods e.g. Car is an object that has characteristics like color, type, model e.t.c Objects are everywhere in JavaScript almost every element in JavScript is an object it could be either a function, array or string.

## Creating Objects
Objects can be created in two ways in JavaScript:
- Object Literal.
- Object Constructor.

### 1. Object literal
```javascript
let Boy = {
    first_name: 'Micheal',
    last_name: 'Kenuga',


    getFunction: function() {
     return (`The name of this person is ${Boy.first_name} ${Boy.last_name}`)   
    },

    phone_no: {
        mobile: '1234567890',
        landline: '0987654321'
    }
}

console.log(Boy.getFunction());
console.log(Boy.phone_no.landline);.
```
### Output:
![Output](../assets/Screenshot%20(106).png)

The output as shown below will be :

```javascript
The name of this person is Micheal Kenuga
0987654321
```

## 2. Object Constructor
```javascript
function Boy(first_name,last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

let boy1 = new boy('Micheal','Kenuga');
let boy2 = new boy('James','Franco');

console.log(boy1.first_name);
console.log(`${boy2.first_name} ${boy2.last_name}`);
```

### Output:
![Output](../assets/Screenshot%20(107).png)

The output shown below is :
```javascript
Micheal
James Franco
```

## Object Properties: Adding, Accessing and Modifying Properties.
Properrties are defined as key-value pairs, where the key is a string or symbol and the value can be any data type, including numbers, strings, booleans, functions, arrays, or other objects.

### It's Syntax:

```javascript
objectName.property
objectName["property"]
objectName[expression]
```

example:
```javascript
let school = {
    name: 'Royal Family Academy(RFA)',
    location: 'Abuja FCT',
    established: '2000',
    20:1000,
    displayInfo: function(){
        console.log(`The Value of the key 20 is ${school[20]}`);
    }
}

school.displayInfo();
```

### Output:
![Output](../assets/Screenshot%20(108).png)

Object Properties are straightforward associations between a name and a value.
Each property has a value and a name, where the value represents the data linked to the property. This data can be accessed based on the property's access level.

## Object Methods
Object methods in JavaScript can be accesed by using functions.
- In a method 'this' this refers to the owner project.
- Additional information can also be added along with the object method.

#### Syntax
```javascript
objectName.methodName()
```

Example:

```javascript
let student = {
    name: "Samuel",
    class:"6th Grade",
    section: "B",

    studentDetails: function(){
        return this.name + " " + this.class + " " + this.section + " ";
    }
};

console.log(student.studentDetails());
```

### Output:
![Output](../assets/Screenshot%20(109).png)

properties:
A function may be divided into different property values, which are then combined and returned together.
This student function contains these properties:
- name
- class
- section

