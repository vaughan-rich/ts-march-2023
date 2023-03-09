//import { userData } from './data/usersresponse.json'
import { Yooza } from "./types/Yooza";

//Build an app to retrieve user data from the API at
//https://jsonplaceholder.typicode.com/users

// Get users from fixture
/*
const users: Yooza[] = userData;
console.log(users);
*/

// Get users using fetch
async function fetchUsers(): Promise<Yooza[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    return data;
}

async function startApp() {
    await fetchUsers();
}
startApp();

// todo: come back to this exercise and finish it properly