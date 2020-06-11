console.log("This is Tutorial 58.js");


// set stores the unique values

let mySet = new Set();
// console.log('The set look like -', mySet);

//Adding values to the set
mySet.add('this');
mySet.add('My name');
mySet.add('that');
mySet.add('that2');
mySet.add(25);
mySet.add(true);
mySet.add('{name:"sumit", greet:f(){}}');
console.log('The set look like this -', mySet);

// use constructor to initialize the set
let mySet2 = new Set(['this', 1, 24, 'that', { a: 8, b: 9 }]);
// console.log('The set2 look like this -', mySet2);


console.log(mySet.size); // get the size of the set
console.log(mySet.has(252)); // check for set value


console.log('Before removal se is -', mySet);
mySet.delete('that2'); // remove an element from the set 
console.log('After removalt the set look like -', mySet);

// Iterating the set  value   using for-of loop
for (let item of mySet) {
    console.log('set item is - ', item);
}

// Iterating the set  value   using foreach loop
mySet.forEach((item) => {
    console.log('set item is - ', item);
})


// Quiz----converting set into an array

let mySetArray = Array.from(mySet);
console.log('The set Array is -', mySetArray)


let arr = [1, 4, 5, 6, 8, 4, 9]
console.log(arr);
let myset = new Set(arr);
console.log(myset);
let setarr = Array.from(myset);
console.log(setarr);