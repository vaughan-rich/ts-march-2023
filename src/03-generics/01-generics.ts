// library

// infer input type rather than have any type
function identity<InputType>(input: InputType) {
    return input;
}

const value = identity('abc')
identity(123);
identity({ quote: 'Do not eat yellow snow.' });

function firstElement<ArrayType>(a: ArrayType[]): ArrayType {
    return a[0];
}

// input types are infered and returns
console.log(firstElement(['a', 'b', 'c']))
console.log(firstElement<number>([1, 2, 3])); // we can explicitly specify
console.log(firstElement([1, 'two', 3, true]));

interface Box<T> {
    boxName: string
    inside: T;
    outside: T;
}
let stringyBox: Box<string> = {
    boxName: 'box of strings',
    inside: 'Hello',
    outside: 'World'
}
let numbyBox: Box<number> = {
    boxName: 'box of strings',
    inside: 100,
    outside: 101
}

interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
  }
  
  function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
  }
  
  let lastDate = getLast({
    value: new Date(),
    next: {
      value: new Date("2023-03-07"),
      next: { value: new Date("2023-03-06") },
    },
  });
  
  type Fruit = "banana" | "apple" | "blackcurrant";
  
  let lastFruit = getLast({
    next: {
      value: "banana",
    },
    value: "apple",
  });
  
  console.log(lastDate);