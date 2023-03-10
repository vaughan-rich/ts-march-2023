// Overloading ...

{
    function add(a: number, b: number) {
        return a + b;
    }

    function addThree(a: number, b: number, c: number) {
        return a + b + c;
    }

    function addMany(...nums: number[]){
        return nums.reduce((a,c) => a + c, 0);
    }
}

// provide multiple defintions to a function, and based on signature type, determine what you want to do

// contrived example:

function overload(name: string): string;
/**
 * 
 * @param age // this is a dot block btw
 */
function overload(age: number): string;
function overload(isSingle: boolean): string;

function overload(value: string|number|boolean): string {
    switch (typeof value) {
        case 'string':
            return `Hello, my name is ${value}`;
        case 'number':
            return `Hello I am ${value} years old`;
        case 'boolean':
            return `Hello I ${value ? "am" : "am not"} single`;
        default:
            throw new Error('Invalid use of this function');
    }
}
console.log(overload('Jonjo'));
console.log(overload(99));
console.log(overload(true));
console.log(overload(false));