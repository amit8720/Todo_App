import React from 'react';
import TodoItems from './TodoItems';

const TodoList = ({ todoList, deleteTodo, toggle, editTodo, updateTodo, editingId, editText, setEditText }) => {
    return (
        <div>
            {todoList.map((item) => (
                <TodoItems
                    key={item.id}
                    text={item.text}
                    id={item.id}
                    isComplete={item.isComplete}
                    deleteTodo={deleteTodo}
                    toggle={toggle}
                    editTodo={() => editTodo(item.id, item.text)}
                    updateTodo={() => updateTodo(item.id)}
                    editing={editingId === item.id}
                    editText={editText}
                    setEditText={setEditText}
                />
            ))}
        </div>
    );
};

export default TodoList;
