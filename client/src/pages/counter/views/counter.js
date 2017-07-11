import React from 'react';
import { increment, decrement } from '../reducer';
import { connect } from 'react-redux';

export const stateKey = 'count';
const Counter = ({count, onDecrement, onIncrement}) => {
    return (
        <div>
            <div> {count}</div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        count: state[stateKey] || 0
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrement: () => {
            dispatch(increment())
        },
        onDecrement: () => {
            dispatch(decrement());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);