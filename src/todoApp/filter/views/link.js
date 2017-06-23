import React from 'react';
import { setFilter } from '../actions'
import { connect } from 'react-redux';
import { FILTERTYPES } from '../../constants';
const Link = ({active, children, onClick, count}) => {
    if (active) {
        return <b className="tu-todo-filter selected">{children}<span className="tu-todos-count">({count})</span></b>
    } else {
        return (
            <a href='' className="tu-todo-filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
            {children}<span className="tu-todos-count">({count})</span>
            </a>
        );
    }
}
const getCountByFilter = (todos, filter) => {
    switch(filter) {
        case FILTERTYPES.All:
            return todos.length;
        case FILTERTYPES.COMPLETED:
            return todos.filter((todoItem) => todoItem.completed).length;
        case FILTERTYPES.UNCOMPLETED:
            return todos.filter((todoItem) => !todoItem.completed).length
        default:
            return todos.length;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter,
        count: getCountByFilter(state.todos, ownProps.filter)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Link);