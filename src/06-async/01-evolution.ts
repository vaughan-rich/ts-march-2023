import fs from 'node:fs';

// callbacks

// error first callbacks
fs.readFile(__filename, (error, data) => {
    if(error) {
        console.log(error);
        return;
    }
    const [first] = data.toString().split(' ');
    console.log(first);
}) // callback based function