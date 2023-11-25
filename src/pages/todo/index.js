import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, changeStatus, delTodo} from "@/store/todo-slice";

const Index = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const todos = useSelector(state => state.todo.todos)

    const handleCreate = () => {
        setTodo('');
        dispatch(addTodo(todo));
    }

    const handleDelete = (index) => {
        dispatch(delTodo(index));
    }

    const handleStatusChange = (index) => {
        dispatch(changeStatus(index))
    }

    console.log(todos)

    return (
        <div className="m-12 p-6 rounded relative">
            {/* To Do Create */}

            <div className="items-center justify-center mb-2">
                <input className="px-2 rounded py-1 rounded-r-none bg-purple-900 text-white ring-0 ring-offset-0 outline-none" type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button className="ml-0.5 bg-purple-900 rounded-l-none text-white px-2 rounded text-sm py-0.5 " onClick={handleCreate}>Ekle</button>
            </div>

            {/* To Do Listing */}
            <div className="mt-2">
                <ul className="gap-y-1 grid items-center">
                    {todos.map((todo, index) => (
                        <li key={index} className="flex justify-between border-b pb-1 border-opacity-20 border-white
                        ">
                            <button onClick={() => handleStatusChange(index)}>
                                <span className={`${todo.status ? '' : 'line-through'} text-xs`}>{todo.text}</span>
                            </button>
                            <button className="ml-2 bg-red-600 text-xs rounded px-3" onClick={() => handleDelete(index)}>Sil</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-purple-800 bg-opacity-30 rounded -z-10"></div>
            <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-purple-800 bg-opacity-30 rounded blur-xl -z-20"></div>
        </div>
    );
};

export default Index;