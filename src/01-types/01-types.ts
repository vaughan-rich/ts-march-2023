// Basic Stuff Recapped

{
    const name = 'rich';
    console.log(name.length);
    const length = 10;
    let isOn = true;
    let no = undefined;
    let nah = null;
    let symbol = Symbol();
    let bigNumber = 423234n;
}

{
    // union types

    let name: string | number = 'richard';
    name = 'vaughan';
    name = 123;
}

{
    // implicit any

    let age;
    age = 28;

    let city: 'Glasgow' | 'Birmingham' | 123 | 'London';
}

{
    // functions
    
    // can be used before it's declared
    function add(number1: number, number2: number): number {
        return number1 + number2;
    }
    const firstSum = add(4,6);

    // needs to be declared first before it's used
    const multiple = function (a: number, b: number): number {
        return a * b;
    }
    const divide = (a: number, b: number): number => a / b;
    const divideMultiline = (a: number, b: number): number => {
        const res = a / b;
        console.log(res)
        return res;
    }
}

{
    // enums

    enum ScreenSize {
        Small = 400,
        Medium = 640,
        Large = 1080,
        XLarge = 1920
    }

    const laptop = ScreenSize.Large;
    console.log(laptop);
}

{
    // custom types

    type UK = "England" | "Northern Ireland" | "Wales" | "Scotland"
    let uk: UK
    uk = "England";

    function whichType(): UK {
        return "England";
        //return "Ireland"; // error message
    }
}

{
    // array/tuple

    const fabFour: string[] = ['John', 'Paul', 'George', 'Ringo', 'George Martin'];
    const myGeneration: Array<string> = ['Roger', 'Pete', 'John'];
    fabFour.pop();
    myGeneration.push('Keith');

    const stuff: (string | number | boolean)[] = ['foo', 123, false];

    let tupleArray: [number, string, string] = [1, 'two', '3'];
   
    tupleArray.push(10); // shouldn't let you do this, but it does?

    //tupleArray[0] = 'one'; // error message 
    //tupleArray[1] = 2; // error message

}