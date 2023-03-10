// void type:
// definitely not going to return anything
function log(): void {
    console.log('Hello!');
    //return 'banana'// this will error
}

// never type:
// represents a value that will never occur - it's impossible for X to happen

function getGoing(): never {
    while(true) {
        console.log("I'm working over here")

        //e.g. listening for new connections, keeping a connection alive, etc
    }
}

// unknown type - comes into its own when type guarding
// start off with unknown, and then subsequent code can narrow down to a different type
{
    function stringifyForLogging(value: unknown): string {
        if (typeof value === "function") {
          // Within this branch, `value` has type `Function`,
          // so we can access the function's `name` property
          const functionName = value.name || "(anonymous)";
          return `[function ${functionName}]`;
        }
      
        if (value instanceof Date) {
          // Within this branch, `value` has type `Date`,
          // so we can call the `toISOString` method
          return value.toISOString();
        }
      
        return String(value);
      }
}