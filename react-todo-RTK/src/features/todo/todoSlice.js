import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[],
    filter: "ALL",
    searchTerm: ""
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },  
        markCompleted: (state, action) => {
            state.todos.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.completed = true;
                }
            });
        },
        markIncomplete: (state, action) => {
            state.todos.forEach(todo => {
                if (todo.id === action.payload) {
                    todo.completed = false;
                }
            });
        },
        filterTodos: (state, action) => {
            state.filter = action.payload;
        },
        markAllCompleted: (state, action) => {
            state.todos.forEach(todo => {
                todo.completed = true;
            });
        },
        updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})


export const { addTodo, toggleTodo, removeTodo, markCompleted, markIncomplete, filterTodos, markAllCompleted, updateSearchTerm } = todoSlice.actions;

export default todoSlice.reducer;