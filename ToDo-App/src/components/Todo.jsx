
import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import Header from "./Header";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState("");
    const [error, setError] = useState("");

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "") {
            setError("Task is a required field.");
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        };
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
        setError("");
    };

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggle = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    const editTodo = (id, text) => {
        setEditingId(id);
        setEditText(text);
    };

    const updateTodo = (id) => {
        setTodoList((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, text: editText } : todo
            )
        );
        setEditingId(null);
        setEditText("");
    };

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    return (
        <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            <Header />

            {/* Input box */}
            <div className="flex items-center my-7 bg-gray-200 rounded-full">
                <input
                    ref={inputRef}
                    className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
                    type="text"
                    placeholder="Add Your Task"
                />
                <button onClick={add} className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">
                    ADD +
                </button>
            </div>

            {/* Error message */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Todo list */}
            <TodoList
                todoList={todoList}
                deleteTodo={deleteTodo}
                toggle={toggle}
                editTodo={editTodo}
                updateTodo={updateTodo}
                editingId={editingId}
                editText={editText}
                setEditText={setEditText}
            />
        </div>
    );
};

export default Todo;
