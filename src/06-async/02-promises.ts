import fs from 'node:fs'

// What is a Promise?

// A handshake
// Something that will give you a response after some time
// An IOU
// Something that gets passed to an event loop and gets done later
// A receipt

// Promise can be pending or settled (settled = resolved or rejected)
// AbortController allows us to cancel a promise.

function promiseReadFile(filename: fs.PathOrFileDescriptor): Promise<Buffer|null> {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (error, data) => {
            if(error) {
                reject(error);
            }
            resolve(data);
        })
    })
}

// promiseReadFile(__filename).then((data) => {
//     console.log((data as Buffer).toString())
// });

Promise.all([
    promiseReadFile(__filename),
    promiseReadFile(__filename),
    promiseReadFile('not a valid filename')
])
    .then(data => console.log(data))
    .catch(error => console.log(error)); // if one promise fails here, they all fail

Promise.allSettled([
    promiseReadFile(__filename),
    promiseReadFile(__filename),
    promiseReadFile('not valid but the rest should work')
])
    .then(data => console.log(data));

// Aborting a promise
const ac = new AbortController();

console.log('starting the fetch');
fetch('https://api.github.com/usersd', {signal: ac.signal})
    .then((response) => {
        if (!response.ok) {
            throw new Error();
        }
        response.json();
    })
    .then(data => console.log(data))
    .catch((error) => console.log(error, 'problem with the fetch'));

ac.abort();

// todo: add this abort stuff