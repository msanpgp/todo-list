import React from 'react';

function ToDoItem({ todo, onComplete, onDeleteItem }) {

    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.task}
            <div className='iconsContainer'>
                <input
                    className='todo-checkbox'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onComplete(todo.id)}
                />
                <button className="delete-btn" onClick={() => onDeleteItem(todo.id)}>x</button>

            </div>
        </div>
    )
}

export default ToDoItem;