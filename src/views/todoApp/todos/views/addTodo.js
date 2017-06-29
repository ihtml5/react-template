import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { view as Badge } from '../../badge';
import '../../../../styles/todo.css';
class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectTodoType = this.onSelectTodoType.bind(this);
    }
    onSelectTodoType (typeId) {
        this.setState({
            typeId: typeId
        })
    } 
    onInputChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const { value, typeId } = this.state;
        if (!value.trim() || typeof typeId === 'undefined') {
            return;
        }
        this.props.onAdd(value, typeId)
        this.setState({
            value: ''
        });
    }
    render() {
        const { todoTypes } = this.props;
        const { typeId } = this.state;
        return <div className="tu-add-todo">
            <form onSubmit={this.onSubmit} className="tu-todos-form">
                <input className="tu-new-todo" placeholder="请添加待办事项" value={this.state.value} onChange={this.onInputChange}/>
                <button className="tu-add-btn" type="submit">添加</button>
            </form>
            <div className="tu-badges">
                {
                    todoTypes.map((todoTypeItem, i) => <Badge selected={ typeId === todoTypeItem.id} key={todoTypeItem.id} onSelectTodoType={this.onSelectTodoType} typeId={todoTypeItem.id} color={todoTypeItem.color} name={todoTypeItem.name}/>)
                }
            </div>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        todoTypes: state.todoApp.todoTypes
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (text, typeId) => {
            dispatch(addTodo(text, typeId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);