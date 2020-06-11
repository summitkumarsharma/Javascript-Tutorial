console.log("This is Tutorial 43.js");

async function my() {
    console.log("inside the  function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log('users resolved');
    return users;
    // return "Hello"

}


console.log("Before calling function");
let a = my();
console.log("After calling function");
console.log(a);
a.then(data => console.log(data));
console.log("At Last work done");;