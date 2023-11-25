import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "@/store/todo-slice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})

store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState().todo.todos));
});