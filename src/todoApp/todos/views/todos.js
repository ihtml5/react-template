import React, { Component } from 'react';
import AddTodo  from './addTodo';
import TodoList from './todoList';

export default class Todo extends Component {
    render() {
        return (<div className="tu-todos-list">
            <AddTodo/>
            <TodoList/>
        </div>);
    }
}