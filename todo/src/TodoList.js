import React from 'react';
import {TOGGLE_COMPLETED} from './reducers/reducer.js';
import './TodoList.css';

const Todo = props => {
    return (
      <div
        className={`todo${props.task.completed ? " completed" : ""}`}
        onClick={() => props.dispatch({type: TOGGLE_COMPLETED, payload: props.task.id})}
      >
        <p>{props.task.item}</p>
      </div>
    );
  };

const TodoList = props => {
    return (
        <div>
            {props.tasks.todoListInitial.map(todo => (
                <Todo key={todo.id} task={todo} dispatch={props.dispatch} />
            ))}
        </div>
    );
};

export default TodoList;