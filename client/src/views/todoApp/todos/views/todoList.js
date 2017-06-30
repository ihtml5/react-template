import React, { Component }  from 'react';
import { createSelector } from 'reselect';
import TodoItem from './todoItem';
import { FILTERTYPES } from '../../constants';
import {  connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import '../../../../styles/todo.css';
class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <ol className="tu-todo-list">
                {
                    todos.map((item, i) => (
                        <ReactCSSTransitionGroup key={item.id}
                            transitionName="example"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>
                            <TodoItem
                                key = {item.id}
                                id = {item.id}
                                text = {item.text}
                                completed = {item.completed}
                                typeId = {item.typeId}
                                />
                        </ReactCSSTransitionGroup>
                    ))
                }
            </ol>
        );
    }
}

const getVisibilityFilter  = (state) => state.todoApp.filter;
const getTodos = (state) => state.todoApp.todos;
const selectVisibleTodos = (filter, todos) => {
    switch(filter) {
        case FILTERTYPES.All:
            return todos;
        case FILTERTYPES.COMPLETED:
            return todos.filter(item => item.completed);
        case FILTERTYPES.UNCOMPLETED:
            return todos.filter( item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
}
const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  selectVisibleTodos);
const mapStateToProps = (state, ownProps) => {
    return {
        todos: getVisibleTodos(state)
    }
}
export default connect(mapStateToProps)(TodoList);