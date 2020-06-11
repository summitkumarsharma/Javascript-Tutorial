console.log("This is tut31.js");


// Implimenting ES6 Classes and Inheritance

class Employee {

    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }

    slogan() {
        return `I am ${this.name} and this is the best company.`;
    }
    joiningYear() {
        return 2020 - this.experience;
    }


    static add(a, b) {
        return a + b;
    }
}


class programmer extends Employee {
    constructor(name, experience, division, language, github) {
        super(name, experience, division);
        this.language = language;
        this.github = github;
    }
    favouriteLnaguage() {
        if (this.language = "python") {
            return "python";
        } else {
            return "Javascript"
        }

    }

    static multiply(a, b) {
        return a * b;
    }

}

let empObj = new Employee("Sumit", 5, "CS");
// console.log(empObj);
// console.log(empObj.slogan());
// console.log(empObj.joiningYear());
// console.log(Employee.add(3, 4));


let proObj = new programmer("Sam", 8, "EE", "VLSI", "sam123");
console.log(proObj);
console.log(proObj.slogan());
console.log(proObj.joiningYear());
console.log(proObj.favouriteLnaguage());
console.log(programmer.multiply(5, 6));