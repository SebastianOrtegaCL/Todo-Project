import { countTodo } from "../js/componentes";
import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    // this.todos = [];
    this.cargarLocalStorage();
    this.countPendiente();
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
    this.countPendiente();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter( todo => todo.id != id )
    this.guardarLocalStorage();
    this.countPendiente();

  }

  marcarCompletado(id) {
    for( const todo of this.todos){
      if (todo.id === id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        this.countPendiente();
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter( todo => !todo.completado )
    this.countPendiente();

    this.guardarLocalStorage();
  }


  guardarLocalStorage(){
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }

  cargarLocalStorage(){
    this.todos = (localStorage.getItem('todo')) 
      ? JSON.parse(localStorage.getItem('todo'))
      : [];
    this.todos = this.todos.map( Todo.fromJson );
  }

  countPendiente(){

    let pendientes = 0;
    let span = countTodo.firstElementChild;

    this.todos.forEach(element => {
      if (!element.completado) {
        pendientes++;
      } else if (condition) {
        
      }
      span.innerHTML = pendientes;
    });

  }
}
