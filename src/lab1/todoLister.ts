import { todos } from "../../data/todos.json";
import { Todo } from "./types/Todo";

// Creating type safe instances of Todo
const todo1: Todo = todos[0] as Todo;
//console.log(todo1);

let customTodo: Todo = {
    userId: 123,
    id: 99,
    title: 'Task to complete',
    completed: false
}
//console.log(customTodo);

const todo42: Todo | undefined = todos.find(todo => todo.id === 34) as Todo;
//console.log(todo42);

// Get Todos by userId and sort by id
const getUserTodos = (userId: number): Todo[] => {

    const userTodos = todos.filter(todo => todo.userId === userId);
    const sortedUserTodos = userTodos.sort((a,b) => {
        return a.id - b.id;
    })
    return sortedUserTodos as Todo[];
}
console.log('All Todos: ', getUserTodos(3));

// Get incomplete Todos by userId
const getIncompleteUserTodos = (userId: number): Todo[] => {

    const userTodos = todos.filter(todo => {
        return (todo.userId === userId && todo.completed !== true)
    });
    const sortedUserTodos = userTodos.sort((a,b) => {
        return a.id - b.id;
    })
    return sortedUserTodos as Todo[];
}
console.log('Incomplete Todos: ', getIncompleteUserTodos(3));


