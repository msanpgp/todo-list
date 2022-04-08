import React from 'react'
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onComplete, onDeleteItem }) {
    return (
        <div>
            {
                todos.map((todo, index) => (
                    <ToDoItem
                        key={`todo-${index}`}
                        todo={todo}
                        onComplete={onComplete}
                        onDeleteItem={onDeleteItem}
                    />
                ))
            }
        </div>
    )
}

export default ToDoList; 