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