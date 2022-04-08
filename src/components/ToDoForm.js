import React, { useState } from 'react'

function ToDoForm({ addTodo }) {

    const [userInput, setUserInput] = useState('');

    const handleOnChange = (e) => {
        // Para escribir en el input de agregar tareas
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        // evita que el formulario se envie por defecto
        e.preventDefault();
        // si el texto es diferente de vacio
        if (userInput.trim() !== '') {
            // se envia el componente al componente padre
            addTodo(userInput);
            // actualizamos el texto del input en vacio
            setUserInput('');
        }
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                type="text"
                value={userInput}
                onChange={handleOnChange}
                placeholder="Agrega una tarea..."
            />
            <button className='todo-button'>+</button>
        </form>
    )
}

export default ToDoForm;