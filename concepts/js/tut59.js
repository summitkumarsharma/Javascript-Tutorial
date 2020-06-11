console.log("This is tutorial 59.js");

//Symbols

const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
// console.log('My Symbol is =', sym1);
// console.log('Type of Symbol is =', typeof sym1);


console.log(sym1 === sym2);


const a = 'this is';
const b = 'this is';
console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = "Sumit"
myObj[k2] = "Sameer"
myObj["name"] = "Good Morning";
myObj[4] = "int value";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2); // will not give value-- undefined value

// symbols are ignored in for in loop
for (let key in myObj) {
    console.log('key is-',
        key, 'value is - ', myObj[key]);

}
console.log(JSON.stringify(myObj));