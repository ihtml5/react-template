import React from 'react';
import { setFilter } from '../actions'
import { connect } from 'react-redux';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <b className="tu-todo-filter selected">{children}</b>
    } else {
        return (
            <a href='' className="tu-todo-filter not-selected" onClick={(ev) => {
                ev.preventDefault();
                onClick();
            }}>
            {children}
            </a>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Link);