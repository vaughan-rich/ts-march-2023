// Redux ... Generator (async ..)
// High cost calculations
// Lazy evaluation

// stops at every yield (instead of return) and the next time its called it resumes from that point
// with each subsequent call, yields next yield - keeps track of state internally
function* generatorFunction() {
    // you can put any logic in here
    yield '🍇'
    yield '🍈'
    yield '🍉'
    yield '🍊'
}

const fruitGenerator = generatorFunction();
const otherFruitGenerator = generatorFunction(); // this one is separate instance with its own count

console.log(fruitGenerator.next()); // 🍇
console.log(fruitGenerator.next()); // 🍈
console.log(fruitGenerator.next()); // 🍉
console.log(fruitGenerator.next()); // 🍊
console.log(fruitGenerator.next()); // done
console.log(fruitGenerator.next()); // done

for (let fruit of otherFruitGenerator) {
    console.log(fruit)
}
for (let fruit of fruitGenerator) {
    // This instance of fruitGenerator has already got to the end of its state
    console.log(fruit)
}

// if you want to use a generator more than once, you should re-instantiate/move around etc

// an iterator and a generator are very similar things, but the generator has a bit of syntactic sugar to make things easier

function* fibonacci(): Generator<string> {
    let first = 1;
    let second = 1;
    while (true) {
        let sum = second + first;
        yield `The next value is ${sum}`;
        first = second;
        second = sum;
    }
}
const fib = fibonacci();

console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());

// passing values back into a generator..?
function* twoWayGenerator(): any {
    const what = yield null;
    while (true) {
      yield "Hello " + what;
    }
  }
const twoWay = twoWayGenerator();
console.log(twoWay.next());
console.log(twoWay.next("world"));
console.log(twoWay.next("stuck in while loop"));