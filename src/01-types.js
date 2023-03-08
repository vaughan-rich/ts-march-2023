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
    let name = 'richard';
    name = 'vaughan';
    name = 123;
}
{
    // implicit any
    let age;
    age = 28;
    let city;
}
{
    // functions
    // can be used before it's declared
    function add(number1, number2) {
        return number1 + number2;
    }
    const firstSum = add(4, 6);
    // needs to be declared first before it's used
    const multiple = function (a, b) {
        return a * b;
    };
    const divide = (a, b) => a / b;
    const divideMultiline = (a, b) => {
        const res = a / b;
        console.log(res);
        return res;
    };
}
{
    // enums
    let ScreenSize;
    (function (ScreenSize) {
        ScreenSize[ScreenSize["Small"] = 0] = "Small";
        ScreenSize[ScreenSize["Medium"] = 1] = "Medium";
        ScreenSize[ScreenSize["Large"] = 2] = "Large";
        ScreenSize[ScreenSize["XLarge"] = 3] = "XLarge";
    })(ScreenSize || (ScreenSize = {}));
    const box = ScreenSize.Small;
    console.log(box);
}
