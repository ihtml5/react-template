import React  from 'react';
import TodoItem from './todoItem';
import { toggleTodo, removeTodo,editTodo} from '../actions';
import { FILTERTYPES } from '../../constants';
import {  connect } from 'react-redux';

const TodoList = ({todos, onToggleTodo, onRemoveTodo, onEditTodo }) => {
    return (
        <ol className="tu-todo-list">
            {
                todos && todos.length>0 && todos.map((item, i) => (
                    <TodoItem
                        key = {i}
                        text = {item.text}
                        completed = {item.completed}
                        onToggle = { () => onToggleTodo(item.id)}
                        onRemove = { () => onRemoveTodo(item.id)}
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
        onToggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id))
        },
        onEditTodo: ({id, text}) => {
            dispatch(editTodo({id, text}))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);