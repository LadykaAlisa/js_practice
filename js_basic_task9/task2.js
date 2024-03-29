const person = new Object();
person.name = "Alice";
person.age = 25;
person.gender = "female";
person.greet = function() {
    return `Hello, my name is ${this.name}.`;
};

const car = new Object();
car.brand = "BMW";
car.model = "X5";
car.year = 2020;
car.drive = function() {
    return "The car is driving.";
};


console.log(person.name);

console.log(car.brand);

console.log(person.greet()); 
console.log(car.drive()); 
