class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor(name, age, sweemSpeed) {
        super(name, age);
        this.sweemSpeed = sweemSpeed;
    }

}

class Hawk extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 5, 20);
const fish = new Fish("fish", 4, 15);
const hawk = new Hawk("hawk", 10, 55);
const data = [rabbit, fish, hawk];

console.log(rabbit.name)

data.forEach((data) =>
    console.log(data)
);




