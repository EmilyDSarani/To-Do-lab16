export const USER = 'USER';

// I'll want to put this function into my olderuser.js so that anything that is put here, it can grab it. 
export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    return JSON.parse(stringyUser);
}

// I'll want to hook this up to my newuser.js, this way it can grab whatever is put in here. 

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

// this might also want to be grabbed in my olduser.js. this way it can grab the to-do list that the user was working on
export function getTodos() {

    const { todos } = getUser();

    return todos;

}

//might need to put this somewhere in my newuser.js this will be needed to set the todo lists initially. 
//update, but still keeping the above- this might go to the Todo's because we will want to loop through it to set it and then when we get it later it will be through the account log in...yea...
export function setTodos(todos) {
    const user = getUser();

    user.todos = todos;

    setUser(user);
}

// this might...also go into the todo.js because we would want the user to be able to create new
export function addTodo(message) {
    const todos = getTodos();

    const newTodo = {
        id: Math.ceil(Math.random() * 10000),
        todo: message,
        completed: false,
    };

    todos.push(newTodo);

    setTodos(todos);
}

// this might go to the olduser.js because we would want the submit button to be able to find the user
export function completeTodo(id) {
  
    const todos = getTodos();

    const matchingTodo = todos.find(todo => todo.id === id);

    matchingTodo.completed = true;
   

    setTodos(todos);
}