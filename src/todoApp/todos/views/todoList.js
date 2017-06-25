import React  from 'react';
import TodoItem from './todoItem';
import { editTodo } from '../actions';
import { FILTERTYPES } from '../../constants';
import {  connect } from 'react-redux';

const TodoList = ({todos, onToggleTodo, onRemoveTodo, onEditTodo }) => {
    return (
        <ol className="tu-todo-list">
            {
                todos.map((item, i) => (
                    <TodoItem
                        key = {item.id}
                        id = {item.id}
                        text = {item.text}
                        completed = {item.completed}
                        onEdit = { (text) => onEditTodo({text, id: item.id})}
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
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditTodo: ({id, text}) => {
            dispatch(editTodo({id, text}))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);