import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllCompleted } from "../redux/actions"

const FilterButton = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector(state => state.filter)

  return (
    <div className="flex space-x-4 items-center">
        <select 
            value={currentFilter}
            onChange={e => dispatch(filterTodos(e.target.value))}            
            className="text-sm px-2 py-1 rounded border-gray-300 focus:outline-none"
        >
            <option value="ALL">Default</option>
            <option value="COMPLETED">Completed</option>
            <option value="INCOMPLETE">Incompleted</option>
        </select>
        <button 
            onClick={() => dispatch(markAllCompleted())}
            className='text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded'
        >
            Mark All Completed
        </button>
    </div>
  )
}

export default FilterButton