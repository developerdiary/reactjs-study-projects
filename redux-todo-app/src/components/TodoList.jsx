import { useSelector } from "react-redux"
import { createSelector } from 'reselect';
import TodoItem from "./TodoItem"


// Define your base selectors
const getFilter = (state) => state.filter;
const getSearchTerm = (state) => state.searchTerm;
const getTodos = (state) => state.todos;

// Create a memoized selector using createSelector
const getFilteredTodos = createSelector(
  [getFilter, getSearchTerm, getTodos],
  (filter, searchTerm, todos) => {
    return todos.filter((todo) => {
      const matchesFilter =
        filter === 'ALL' ||
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed);

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  }
);

const TodoList = () => {

    const filteredTodos = useSelector((state) => getFilteredTodos(state));

    // const filteredTodos = useSelector((state) => {
    //     const filter = state.filter
    //     const searchTerm = state.searchTerm
    //     const todos = state.todos

    //     return todos.filter((todo) => {
    //         const matchesFilter = filter === "ALL" || (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed)

    //         const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

    //         return matchesFilter && matchesSearch
    //     })

    // })

    return (
        <ul>
            <li className="my-2 text-sm italic">All Your Notes Here...</li>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>

    )
}

export default TodoList