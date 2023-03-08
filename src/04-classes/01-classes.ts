// Prototypal -> prototypal inheritance

interface Animal {
    sayHello(): void;
}

interface Pet {
    vet: string;
    adoptionDate: Date;
}

class Dog implements Animal, Pet {
    constructor(
        public name: string,
        public location: string,
        public vet: string,
        public adoptionDate: Date
    ) {}
    bark() {
        console.log('Woof!');
    }
    sayHello(): void {
        this.bark();
    }
}

const rex = new Dog("Rex", "Leeds", "Dr. Bob", new Date("31/03/2020"));
rex.bark();
rex.sayHello();
rex.name;
rex.location;