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

## `this` Keyword:
The this keyword refers to the object that is currently executing a function or method,
The keyword refers to different objects depending on how it is used.

1. When used within a method of an object, `this` keyword points to that object.
2. When used by itself, `this` keyword points to the global object.
3. Within a function, `this` keyword typically points to the global object.
4. In a function under strict mode, `this` keyword becomes undefined.
5. During an event, `this` keyword points to the element that triggered the event.
5. Methods such as `call()`, `apply()`, and `bind()` can reassign this to any desired object.

Example:

### using `this` keyword in Method

```javascript
const person = {
    name: 'John',
    age: 23,
    greet() {
        console.log("Hello my name is " + this.name + " and I am" + this.age + " Years old.");
    }
};

person.greet();
```

### Output:
![Output](../assets/Screenshot%20(133).png)

This program defines a person object with the name, age and a greet method, when the person.greet() is called, it prints a greeting message with the person's name and age.

### using `this` keyword in function

```javascript
function greet() {
    console.log("Hello, my name is " + this.name);
}

const person = {
    name: 'John',
    sayHello: greet
};

const anotherPerson = {
    name: "Jane"
};

greet();
person.sayHello();
greet.call(anotherPerson);
```

### Output:
![Output](../assets/Screenshot%20(134).png)

This program defines a greet function and two objects, person and anotherPerson. Then calls greet, person.sayHello, and greet with anotherPerson context using call.

## Object-Oriented Programming (OOP)
(OOP) Object Oriented Programming aims to implement real-world entities like, inheritance, hiding, polymorphism, e.t.c. The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

### (OOP) Concept's :
- Class
- Objects
- Encapsulation
- Data Abstraction
- Inheritance 
- Polymorphism
- Dynamic Binding
- Message Passing

### 1. Class:
A class is a user-defined data type. it consist's of data members and member functions, which can be accesed and used by creating an instance of that class

### 2. Object:
 An object is the basic unit of Object-Oriented-Programming and represents real-life entities. An object is an instance of a class.

### 3. Data Abstraction: 
Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

### 4. Encapsulation:
In encapsulation the variables or data of a class are hidden from any other class and can be accessed only through any member function of their class in which they are declared.

### 5. Inheritance:
Inheritance is the capability of a class to derive properties and characteristics from another class.

### 6. Polymorphism:
Polymorphism is the ability of a message to be displayed in one more than one form.

### 7. Dynamic Binding:
Dynamic binding is when the code is associated with a given procedure call is not known until the time of the call at run time.

## Prototypes
Prototypes in JavaScript are template objects that provide shared properties and methods to the other objects.

Example

```javascript
function Cars(make,model) {
    this.make = make;
    this.model = model;
}

Cars.prototype.start = function (){
    console.log("Engine Started");
};

const myCars = new Cars("Toyota", "Camry");
const anotherCar = new Cars("Honda", "Accord");

myCars.start();
anotherCar.start();
```
### Output:
![Output](../assets/Screenshot%20(155).png)

In this example a Cars constructor function is defined to create car objects with the make and model properties and a shared start method is added to the cars protoype for initiating the engine.


## Prototypal Inheritance:
JavaScript uses prototypal inheritance, which involves cloning a parent object. The objects are templates for creating the next object. So in Javascript there are no classes and an object inherits properties from another object. 

# TO-DO Task:
## 1. Create and manipulate objects.
## 2. Write object methods and use 'this' keyword.

1. Create and manipulate objects:
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

```javascript
The name of this person is Micheal Kenuga
0987654321
```

2.  Write object methods and use 'this' keyword:
```javascript
const person = {
    name: 'John',
    age: 23,
    greet() {
        console.log("Hello my name is " + this.name + " and I am" + this.age + " Years old.");
    }
};

person.greet();
```