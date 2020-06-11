console.log("This is Tutorial 57.js");

//Maps in JavaScript: we can use any type of key or value


const myMap = new Map();
console.log(myMap);


const key1 = 'myStr',
    key2 = {},
    key3 = function() {};

// setting the map values 
myMap.set(key1, 'This is String');
myMap.set(key2, 'This is a blank object');
myMap.set(key3, 'This is an empty function');
console.log(myMap);


// Getting the values from a Map

let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);

console.log(value1, value2, value3);
console.log(myMap.size);

// we can loop using for...of to get keys and values  

for (let [key, value] of myMap) {
    console.log(key, value);
}

//Get only keys
for (let key of myMap.keys()) {
    console.log(' key is ', key);
}

// Get only values
for (let value of myMap.values()) {
    console.log(' value is ', value);
}


// we can loop a map by using foreach loop
myMap.forEach((value, key) => {
    console.log('key is -', key);
    console.log('value is -', value);
})


// converting Map to array
let myArray = Array.from(myMap);
console.log('Map to Array is - ', myArray);

// converting Map key  to array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to key Array is - ', myKeysArray);

// converting Map values  to array
let myValuesArray = Array.from(myMap.values());
console.log('Map to value Array is - ', myValuesArray);