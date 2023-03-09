// 1. Default Parameters

function areaOfTriangle(
    length: number = 10, width: number = 10) {
    return 0.5 * length * width;
}

const defaultLength = 50;
function areaOfRectangle(
    length: number = defaultLength, width: number = length) {
    return length * width;
}

console.log(areaOfTriangle(10 ,10)); // 50
console.log(areaOfTriangle(5)); // 25
console.log(areaOfTriangle()); // 50

console.log(areaOfRectangle(10, 10)); // 100
console.log(areaOfRectangle(10)); // 100
console.log(areaOfRectangle()); // 2500

// 2. Template Literals

{
    const firstName = "Zak";
    const lastName = "Aden";
    var name = "Your name is " + firstName + " " + lastName + ".";
    const name2 = `Your name is ${firstName} ${lastName}.`;
}
console.log(name);
export default {};

// 3. Object Literals

function getLaptop(make: string, model: string, year: number) {
    return {
        make,
        model,
        year
    };
}

// 4. var vs let/const

// let and const are block scoped - and are generally safer than var
// the following won't compile in ts - but the idea is that the first scopedLet will be undefined

/*function letFunction() {
    console.log('Before defining block', scopedLet);
    if (true) {
        let scopedLet = 'I am scoped wtihin a block'; // if this was var, it would leak (hoisted to top of function)
    }
    console.log('After defining block', scopedLet);
}*/

// 5. [] {}

//console.log([] === []); // false (each [] pointing to new point in memory)

{
    const arrNames = ['Matthew', 'Mark', 'Luke', 'John'];
    const newNames = [...arrNames] // Array.from(arrNames)

    newNames.push('Jesus');

    newNames === arrNames; // false
}

{
    const arrNames = [
        {name: 'Matthew'},
        {name: 'Mark'},
        {name: 'Luke'},
        {name: 'John'},
    ];

    // spread operator creates a shallow clone, not a deep clone
    const newNames = [...arrNames] // Array.from(arrNames)
    
    newNames.push({name: 'Jesus'},);
    
    newNames === arrNames; // false
    newNames[0] === arrNames[0] // true
}

{
    const arrNames = [
        {name: 'Matthew'},
        {name: 'Mark'},
        {name: 'Luke'},
        {name: 'John'},
    ];
    //const newNames = JSON.parse(JSON.stringify(arrNames)); // solution A
    const newNames = structuredClone(arrNames);

    newNames.push({name: 'Jesus'},);
    
    newNames === arrNames;
    newNames[0] === arrNames[0]
}

// todo: go back over the recording for this
