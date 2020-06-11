console.log("This is tutorial 30");

// Define the prototype

const proto = {
    slogan: function() {
        return `This is the best company`;
    },
    changeName: function(newName) {
        this.name = newName;

    }
}

// create the object using prototype defined above first way

let obj1 = Object.create(proto); // create object obj1
obj1.name = "Sumit";
obj1.role = "programmer";
// console.log(obj1);

// console.log(obj1.slogan());
// console.log(obj1.changeName("Sumit2"));
// console.log(obj1);

// create the object using prototype defined above obj2 in another way

const obj2 = Object.create(proto, {
    name: {
        value: "Sumit3",
        writable: true
    },
    role: { value: "programmer" }
});
// console.log(obj2);

// console.log(obj2.slogan());
// console.log(obj2.changeName("Sumit4"));
// console.log(obj2);


// create an Employee constructor 
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// creating the function using proto defined above
Employee.prototype.slogan = function() {
    return ` This is the best company. regards ${this.name}`;
}

// now create the employee object
let empObj = new Employee("Sumit", 34500, 5);
// console.log(empObj);
// console.log(empObj.slogan());


// create the programmer constructor using Employee constructor: implimenting Inheritance

function programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience)
    this.language = language;
}

// inherit the prototype 
programmer.prototype = Object.create(Employee.prototype);


// Mnaually set the constructor

programmer.prototype.constructor = programmer;


// now create the programmmer object

let progObj = new programmer("Sumit", 25000, 5, "Javascript");
console.log(progObj);
console.log(progObj.slogan());