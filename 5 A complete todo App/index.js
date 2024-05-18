// Finding Elements
const container = document.querySelector(".container");
const todoForm = document.querySelector(".todo-from");
const todoInput = document.querySelector("#inputTodo");
const addTodoButton = document.querySelector("#addTodoButton");
const cardBody = document.querySelector(".card-body");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

// delete todo
const deleteTodo = (e) => {
  let selectedTodo = e.target.parentElement.parentElement.parentElement;
  todoLists.removeChild(selectedTodo);
  showMessage("todo is deleted", "danger");
  // const todoId = selectedTodo.id;

  let todos = getTodosFromLocalStorage();
  todos = todos.filter((todo) => {
    if (todo.todoId != selectedTodo.id) {
      return todo;
    }
  });
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

// showMessage
const showMessage = (text, status) => {
  messageElement.textContent = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.textContent = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

// create todo
const createTodo = (todoId, todoValue) => {
  let todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  todoElement.innerHTML = `<span>${todoValue}</span> <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"></i> </button> </span>`;
  todoLists.appendChild(todoElement);
  // delete todo listener
  const deleteButton = todoElement.querySelector("#deleteButton");
  deleteButton.addEventListener("click", deleteTodo);
};

// get Todos From LocalStorage
let getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")) : [];
};

// add todo function
const addTodo = (e) => {
  e.preventDefault();
  let todoValue = todoInput.value;
  // unique id
  const todoId = Date.now();
  createTodo(todoId, todoValue);
  showMessage("todo is added", "success");

  // add todo to localStorage
  const todos = getTodosFromLocalStorage();
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));
  todoInput.value = "";
};

// loadTodos

const loadTodos = () => {
  const todos = getTodosFromLocalStorage();
  todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

// add Event Listener
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos);
