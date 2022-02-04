// import { TodoList } from "./classes/todo-list.class";
// import { Todo } from "./classes/todo.class";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from "./js/componentes";
import "./styles.css";

const todoList = new TodoList();
const tarea = new Todo("Crear un Todo");

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);
