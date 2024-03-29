class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}, a ${this.type} with ${this.color} color.`);
    }

    run() {
        console.log(`${this.type} ${this.name} is running.`);
    }
}

class Dog extends Animal {
    constructor(color, name, breed, age) {
        super(color, name, "dog");
        this.breed = breed;
        this.age = age;
    }

    bark() {
        console.log(`${this.name} says Woof!`);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }
}


class Cat extends Animal {
    constructor(color, name, breed, isFriendly) {
        super(color, name, "cat");
        this.breed = breed;
        this.isFriendly = isFriendly;
    }

    purr() {
        console.log(`${this.name} is purring.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}


const myDog = new Dog("brown", "Max", "Labrador", 3);
const myCat = new Cat("gray", "Whiskers", "Persian", true);


myDog.sayHello();
myDog.run();
myDog.bark();
myDog.fetch();

myCat.sayHello();
myCat.run();
myCat.purr();
myCat.sleep();
