import React from "react";
import todo_icon from "../assets/todo_icon.png";

const Header = ({ title = "To-Do List" }) => {
    return (
        <header className="flex items-center justify-center bg-slate-300 py-4 rounded-t-md shadow-md">
            <img src={todo_icon} alt="To-Do Icon" className="w-8 mr-3" />
            <h1 className="text-black text-2xl font-semibold">{title}</h1>
        </header>
    );
};

export default Header;
