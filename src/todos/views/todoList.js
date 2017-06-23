import React  from 'react';
import TodoItem from './todoItem';
import { toggleTodo, removeTodo } from '../actions';
import { FILTERTYPES } from '../../constants';
import { bindActionCreators } from 'redux';
import {  connect } from 'react-redux';

const TodoList = ({todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ol className="tu-todo-list">
            {
                todos && todos.length>0 && todos.map((item) => (
                    <TodoItem
                        key = {item.id}
                        text = {item.text}
                        completed = {item.completed}
                        onToggle = { () => onToggleTodo(item.id)}
                        onRemove = { () => onRemoveTodo(item.id)}
                        />
                ))
            }
        </ol>
    );
}
const selectVisibleTodos = (todos, filter) => {
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
const mapStateToProps = (state, ownProps) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
    onToggleTodo: toggleTodo,
    onRemoveTodo: removeTodo
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);