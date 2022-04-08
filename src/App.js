import { useState } from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import './App.css';

function App() {

  // Lifecicle Hook nos permite inicializar y cambiar una determinada informacion (state) relacionada componente
  const [todos, setTodos] = useState([]);

  // Aqui se agrega una nueva tarea
  const addTodo = (newTodo) => {
    // Aqui asignamos el id
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1
    }
    let newItem = { id: id, task: newTodo, completed: false };

    setTodos([...todos, newItem])
  }

  // Aqui se elimina una tarea 
  const onDeleteItem = (id) => {
    // Aqui se elimina el componente
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  // Aqui se valida que la tarea esta completada o no
  const onComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) { 
        todo.completed = !todo.completed 
      }
      return todo
    })
    setTodos(updatedTodos)

  }

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <ToDoForm addTodo={addTodo} />
      <hr className='separator' />
      {/* Esto es un props  */}
      <ToDoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem} />
    </div>
  );
}

export default App;