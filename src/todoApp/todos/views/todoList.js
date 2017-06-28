import React, { Component }  from 'react';
import { createSelector } from 'reselect';
import TodoItem from './todoItem';
import { FILTERTYPES } from '../../constants';
import {  connect } from 'react-redux';

class TodoList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.todos.length == this.props.todos.length) {
            return false;
        }
        return true;
    }
    render() {
        const {todos, onToggleTodo, onRemoveTodo } = this.props;
        return (
            <ol className="tu-todo-list">
                {
                    todos.map((item, i) => (
                        <TodoItem
                            key = {item.id}
                            id = {item.id}
                            text = {item.text}
                            completed = {item.completed}
                            typeId = {item.typeId}
                            />
                    ))
                }
            </ol>
        );
    }
}

const getVisibilityFilter  = (state) => state.filter;
const getTodos = (state) => state.todos;
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