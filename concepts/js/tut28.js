console.log("This is tut28.js");

// Object literal 

let obj = {
    name: "sumit",
    channel: "Code with sumit",
    address: "Jupiter"

}

//: Object.prototype

function Obj(givenName) {
    this.name = givenName;
}

Obj.prototype.getName = function() {
    return this.name;

}

Obj.prototype.setName = function(newName) {
    this.name = newName;
}


let obj2 = new Obj("Sumit");
console.log(obj2);
console.log(obj2.setName("Harry"));
console.log(obj2);
console.log(obj2.getName());