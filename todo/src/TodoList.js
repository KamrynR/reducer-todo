import React from 'react';
import {TOGGLE_COMPLETED} from './reducers/reducer.js';
import './TodoList.css';

const Todo = props => {
    return (
      <div
        className={`todo${props.item.completed ? " completed" : ""}`}
        onClick={() => props.dispatch({type: TOGGLE_COMPLETED, payload: props.item.id})}
      >
        <p>{props.item.item}</p>
      </div>
    );
  };

const TodoList = props => {
    return (
        <div>
            {props.tasks.todoListInitial.map(todo => (
                <Todo key={todo.id} item={todo} dispatch={props.dispatch} />
            ))}
        </div>
    );
};

export default TodoList;