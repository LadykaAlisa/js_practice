const person = {
    name: "John",
    age: 30,
    gender: "male",
    greet: function() {
        return `Hello, my name is ${this.name}.`;
    },
    introduce: function() {
        return `I'm ${this.age} years old and I am ${this.gender}.`;
    }
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    start: function() {
        return "The car has started.";
    },
    stop: function() {
        return "The car has stopped.";
    }
};

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    read: function() {
        return `You are reading "${this.title}" by ${this.author}.`;
    },
    review: function() {
        return `This book has ${this.pages} pages.`;
    }
};


console.log(person.greet());
console.log(person.introduce());

console.log(car.start());
console.log(car.stop());

console.log(book.read());
console.log(book.review());
