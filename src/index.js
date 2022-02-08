// import { TodoList } from "./classes/todo-list.class";
// import { Todo } from "./classes/todo.class";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";
import "./styles.css";

export const todoList = new TodoList();


todoList.todos.forEach( crearTodoHtml);
console.warn("todos");
console.log(todoList.todos);

// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo( newTodo );

// const tarea = new Todo("Crear un mew");

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// sessionStorage.setItem('mi-key', 'apassexample123')

// en 1,5 segundos eliminara el item 'mi-key'
// localStorage.setItem('mi-key', 'ABC1233');

// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);
