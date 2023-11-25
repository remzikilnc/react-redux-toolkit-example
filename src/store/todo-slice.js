import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                text: action.payload,
                status: true,
                created_date: new Date().toISOString()
            })

        },
        delTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        },
        changeStatus: (state, action) =>  {
            state.todos.map((todo, index) => {
                if (index === action.payload) {
                    todo.status = !todo.status
                }
            })
        },
        addTodosFromLocalStorage: (state, action) => {
            state.todos = action.payload;
        },
    },
})

export const {addTodo, delTodo, changeStatus, addTodosFromLocalStorage} = todoSlice.actions

export default todoSlice.reducer