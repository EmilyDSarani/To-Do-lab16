## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

/signup
HTML setup
We just need a form for username and password

Event
On submit, create a new user object with that username and password and an empty array of todos. Inject it into localStorage, and send the user to the /todos page.

If somebody tries to sign up and there's already a user in localStorage, just overwrite it and call it a day.

/login
HTML setup
We just need a form for username and password

Event
Get the user from localStorage. Check that the password is correct. If so, send the user to the /todos page. If not, show an error.

/todos
HTML Setups
A form to add new todos, and a ul to inject todos into

Events
On loading the page renderTodos()

On submitting a new todo

Update state
Get the todo data from the form
Make a new todo object with an id, completed, and todo properties
Push the new todo into the todos array
Update DOM
renderTodos()
Clicking on a todo

Update state
find the todo that we clicked on
Change its completed property to true
Update DOM
renderTodos()
Function
renderTodos() - CLEAR OUT THE OLD TODOS FROM THE DOM (ul.textContent = '') - Get todos from local storage - Loop over the todos and for each todo create a li and append it to our ul - When we loop, render completed todos differently from incomplete todos

Local storage functions
getUser()

setUser()

getTodos()

return an array of todos (NOT the whole user object)
setTodos(todos)

put the todos in the right place in local storage
addTodo(message)

create a todo using this message and put it into local storage
completeTodo(id)

find the correct todo in your array
set that todo to completed: true