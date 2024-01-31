import React, { useState } from 'react'
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("")
    const [searchTerm, setSearchTerm] = useState("")

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            dispatch(addTodo(newTodoText.trim()))
            setNewTodoText("")
        }
    }

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal Todo</h2>

            {/* Input text and button */}
            <div className='flex items-center mb-4'>
                <input
                    type='text'
                    className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
                    name="addTodoInput"
                    id="addTodoInput"
                    placeholder='Add Todo'
                    value={newTodoText}
                    onChange={e => setNewTodoText(e.target.value)}
                />
                <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none' onClick={handleAddTodo}>
                    <BsPlus />
                </button>
            </div>

            {/* filter and search */}
            <div className='flex items-center justify-between'>
                <FilterButton />
                <div className='flex items-center mb-4'>
                    <input
                        type='text'
                        className='flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500'
                        name="searchTodoInput"
                        id="searchTodoInput"
                        placeholder='Search Todo'
                        value={searchTerm}
                        onChange={e => {
                            setSearchTerm(e.target.value)
                            dispatch(updateSearchTerm(e.target.value))
                        }}
                    />
                    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'>
                        <BsSearch />
                    </button>
                </div>
            </div>

            <TodoList />

        </div>
    )
}

export default Todo