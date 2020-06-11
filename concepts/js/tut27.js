console.log("This is Tutorial 27")

//creating object using object literal

let car = {
    name: "Maruti",
    topspeed: 89,
    run: function() {
        console.log("car is running");
    }
}

// creating consturctor for car abject

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function() {
        console.log(`${this.name} is running`);
    }

    this.analyze = function() {
        console.log(`This car is slower than ${200 - this.topspeed}km/H than mercedes`);
    }
}

// calling the objects using constructor
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Maruti", 80);
car3 = new GeneralCar("nano", 100);
console.log(car1, car2, car3);