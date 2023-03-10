// Functional Programming

// Easier to test

// Pure functions ...
// ... input, always same output

let base = 5;

function add(a: number, b: number) {
    return a + b + base;
}

// Function Composition
// Manage Concurrency (e.g. using lambdas)
// Caching

{
    interface Person {
        name: string;
        age: number;
    }

    const getGreeting = (person: Person): string => {
        return `Hello ${person.name}, you are ${person.age} years old!`;
    }

    const person: Person = { name: 'keith', age: 71 };
    const greeting = getGreeting(person);
}
{
    // Higher Order Functions (a function that can take a function as an argument, and/or can give a function as an ouput)

    interface Person {
        name: string;
        age: number;
    }

    const getGreeting = (person: Person): string => {
        return `Hello ${person.name}, you are ${person.age} years old!`;
    }

    // in JS:
    /*const mapPerson = (fn) => (persons) => persons.map(fn);

    const persons = [
        { name: 'Keith', age: 71},
        { name: 'Richard', age: 75}
    ]

    const greetings = mapPerson(getGreeting)(persons);
    console.log(greetings);*/

    // in TS:
    const mapPerson = 
        <T>(fn: (person: Person) => T) =>
        (persons: Person[]) =>
        persons.map(fn);

    const persons = [
        { name: 'Keith', age: 71},
        { name: 'Richard', age: 75}
    ]

    const greetings = mapPerson(getGreeting)(persons);
    console.log(greetings)
}
{
    // Composability ... currying/curried functions

    // here i'm combining two functions, the input of the second is the same
    // type as the output of the first. You can use single letter variable names
    // for generics to make it more concise, but it becomes less readable.
    const compose = <FirstType, FirstOutput, SecondOutput>(
            firstFunction: (x: FirstType) => FirstOutput,
            secondFunction: (x: FirstOutput) => SecondOutput
            ) => 
            (input: FirstType) =>
              secondFunction(firstFunction(input));

        const addFive = (a: number) => a + 5; // could be get viewing history
        const double = (a: number) => a * 2; // could be get recommendations from viewing history

        const addFiveAndDouble = compose(addFive, double);

        console.log(addFiveAndDouble(10)) // 30
}
{
    const arr = [1, 5, 3123, 31, 4, 311];

    // map, filter, or reduce methods don't affect original array 👍
    
    // map - arguments can be currentItem, currentIndex, wholeArray
    const double = arr.map((num) => num * 2);
    console.log(double);
    
    // filter - arguments can be currentItem, currentIndex, wholeArray
    const evens = arr.filter((num) => num % 2 === 0);
    
    // reduce - arguments can be accumulator, currentValue, currentIndex, wholeArray
    const sum = arr.reduce((total, num) => total + num, 0);

    // sort method DOES affect original array
    // arr.sort(); // this defaults to 'alphabetical', so if you need to sort numerically you pass in your own function
    const sorted = arr.sort((a, b) => a - b);
    const sorted2 = arr.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    });
    console.log(sorted, arr);
    console.log(sorted2, arr);

    // arr.toSorted(); // upcoming addition to JS

    // combining array methods
    const combined = arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .map((num) => num + 5); // todo: review this whole file and check outputs
    console.log(double);
}