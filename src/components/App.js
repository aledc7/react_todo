import logo from '../images/logo.svg';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import '../css/App.css';


// Creo un array para usar como prueba, por ahora no consulto a nunguna base de datos
const todos = [
  {id:1, text: 'Seguir Aprendiendo React', completed:true, priority:'alta'},
  {id:2,text: 'Aprender JSX', completed:false, priority:'media'},
  {id:3,text: 'Aprender MongoDB', completed:false, priority:'baja'},
]


// Este es el componente PADRE que contendrá a todos los demas
function App() {
  return (
    <>


      <img src={logo} className="App-logo" alt="logo" />

  
      <p className='icon-html'>&#128203; App de Tareas &#9997; </p>
      
      <TodoCounter/>
      
      <TodoSearch/>
      <CreateTodoButton/>
      
      <TodoList>

        {/* esto equivale a un foreach, necesita obligatoriamente un índice unico que se debe llamar `key`. */}

        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}  
      </TodoList>
      
    </>
  );
}

// ya no se usa el export default, se debe indicar entre llaves, para forzar a importar el componente con ese mismo nombre
export  { App };
