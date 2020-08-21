import React, {useState, useReducer} from 'react';
import {
  todoReducer,
  initialState,
  ADD_TODO,
  CLEAR_COMPLETED
} from './reducers/reducer.js';
import TodoList from './TodoList.js';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.target.value);
  };

  return (
    <div>
      <TodoList tasks={state} dispatch={dispatch} />
      <form>
        <label>New Task: </label>
        <input 
          type='text' 
          name='task'
          value={todo}
          onChange={handleChange}
        />
      </form>
      <button onClick={() => {dispatch({type: ADD_TODO, payload: todo})}}>
        Add Task</button>
      <button onClick={() => {dispatch({type: CLEAR_COMPLETED});}}>
        Clear Selected</button>
    </div>
  );
}

export default App;