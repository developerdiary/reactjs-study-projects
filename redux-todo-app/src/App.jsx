import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import Todo from './components/Todo'

function App() {

  return (
    <Provider store={store}>    
      <Todo /> 
    </Provider>
  )
}

export default App
