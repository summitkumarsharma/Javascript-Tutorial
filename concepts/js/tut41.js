console.log("This is Tutorial 41.js")

// Arrow functions concetpt

// simple function
function my() {
    console.log("This is Arrow funtion concept");

}

// my();

// writing the same function in a different way

const my1 = function() {
    console.log("This is Arrow funtion concept");
}


// my1();



// Again writing the same function using Arrow function

const my2 = () => {
    console.log("This is Arrow funtion concept");
}

// my2();
const greet = () => {
    return "Good Morning";
}



// let a = greet();
// console.log(a);


// one liners do not require braces/return. it will be automatically return

// const greet1 = () => "Good Morning";
// const greet1 = () => ({ name: "sumit" });
// const greet1 = (name) => " Good Morning " + name;
// const greet1 = name => " Good Morning " + name;

// single parameters do not required parenthesis but multiple parameters required parenthesis

const greet1 = (name, end1) => " Good Morning " + name + " " + end1;
let a = greet1('sumit', 'bye');
console.log(a);