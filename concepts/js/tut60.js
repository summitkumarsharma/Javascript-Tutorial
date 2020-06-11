console.log("This is tutorial 60.js");

// Destructuring in JavaScript

let a, b;
[a, b] = [24, 25];
// console.log(a, b);

// Variables Destructuring 

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log('a=', a);
// console.log('b=', b);
// console.log('c=', c);
// console.log('d=', d);

({ a, b, c, ...d } = { a: 4, b: 5, c: 9, d: 8, e: 7 });
// console.log(a, b, c, d);

// Array Destructuring
const fruits = ['Apple', 'Bananas', 'Mangoes', 'Grapes', 'Orange', 'PineApple'];
[a, b, c, ...d] = fruits;

console.log(a, b, c, d);


//Object Destructuring

const laptop = {
    name: "HP",
    age: "30 days",
    gender: "Male",
    net: 12555,
    start: function() {
        console.log("Started.....");
    }

}

const {
    name,
    age,
    gender,
    net,
    start
} = laptop;
console.log(name, age, gender, net, start);
start();