class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
            console.log("correct");
        }
        else {
            console.error("firstName must be a strin g and length should be more than 0");
        }
    }
    get firstName() {
        return this._firstName;
    }


    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastname = newLastName;

        }
        else {
            console.error("firstName must be a strin g and length should be more than 0");
        }
    }

    get lastName() {
        return this._lastname;
    }


    set age(newAge) {
        if (typeof newAge === "number" && newAge.length > 0) {
            this._age = newAge;
        }
        else {
            console.error("age  must be a number and length should be more than 0");

        }
    }

}

const person1 = new Person("tushar", "chauhan", "sdfss");

console.log(person1);
