import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  return{
    todos,
    addTodo : newTodoText => {
      setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}])
    },
    
    removeTodo : todoID => {
      const updatedTodos = todos.filter( todo => todo.id !== todoID);
      setTodos(updatedTodos);
    },

    toggleTodo : todoID => {
      const updatedTodos = todos.map( todo => todo.id === todoID ? {...todo, completed: !todo.completed} : todo );
      setTodos(updatedTodos);
    },

    editTodo : (todoID, newTask) => {
      const updatedTodos = todos.map( todo => todo.id === todoID ? {...todo, task: newTask} : todo );
      setTodos(updatedTodos);
    }
  }
}
