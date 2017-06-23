import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../../todo.css';
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const inputVal = this.state.value;
        if (!inputVal.trim()) {
            return;
        }
        this.props.onAdd(inputVal)
        this.setState({
            value: ''
        });
    }
    render() {
        return <div className="tu-add-todo">
            <form onSubmit={this.onSubmit}>
                <input className="tu-new-todo" placeholder="请添加待办事项" value={this.state.value} onChange={this.onInputChange}/>
                <button className="tu-add-btn" type="submit">添加</button>
            </form>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        jsonTodos: JSON.stringify(state.todos)
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);