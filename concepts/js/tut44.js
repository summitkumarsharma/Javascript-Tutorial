console.log("This is Tutorial 44.js");

// pretend that this response is coming from server

let a = "Hello"
a = undefined
if (a != undefined) {
    // console.log("This is not undefined");
    throw new Error('This is not undefined');
} else {
    console.log("This is undefined");
}


try {
    // hkhkhkhlhlk
    console.log("we are inside try block");
    functionf1();
} catch (error) {
    // console.log("Are you okay?");
    // console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log("finally this will run");
}