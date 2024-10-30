
import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import edit_icon from "../assets/edit.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle, editTodo, updateTodo, editing, editText, setEditText }) => {
    return (
        <div className="flex items-center my-3 gap-2">
            <div onClick={() => toggle(id)} className="flex items-center cursor-pointer">
                <img src={isComplete ? tick : not_tick} alt="Status" className="w-7" />
            </div>

            <div className="flex flex-1 items-center">
                {editing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-700 ml-4 text-[17px] border-2 border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-orange-600 transition-all duration-300"
                        autoFocus
                    />
                ) : (
                    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>
                        {text}
                    </p>
                )}
            </div>

            {editing ? (
                <button
                    onClick={updateTodo}
                    className="text-white bg-orange-600 hover:bg-orange-700 px-3 py-1 ml-2 rounded-md font-medium shadow-sm transition-all duration-300"
                >
                    Update
                </button>
            ) : (
                <img onClick={editTodo} src={edit_icon} alt="Edit" className="w-4 h-4 cursor-pointer" />
            )}

            <img onClick={() => deleteTodo(id)} src={delete_icon} alt="Delete" className="w-4 h-4 cursor-pointer" />
        </div>
    );
};

export default TodoItems;

