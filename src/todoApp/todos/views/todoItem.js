import React, { PureComponent } from 'react';
import { KEYCODE, TODOSTYLE } from '../../constants';
import { toggleTodo, removeTodo, editTodo } from '../actions';
import { connect } from 'react-redux';
import {view as Badge } from '../../badge';

const doubleClickThreshold = 250;  //ms
let lastClick = 0;
let isDoubleClick = false;
let thisClickTime = null;
class TodoItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.text,
            isEdit: false
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
    }
    onInputChange (e) {
        this.setState({
            value: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const inputVal = this.state.value;
        const { onEdit, id } = this.props;
        if (!inputVal.trim()) {
            alert('待办事项不能为空');
            return;
        }
        onEdit({id, text:this.state.value});
        this.setState({
            isEdit: false
        });
    }
    onDoubleClick(e) {
        if (!isDoubleClick) {
            e.preventDefault();
            return;
        }
        this.setState({
            isEdit: !this.state.isEdit
        });
        isDoubleClick = false;
    } 
    componentDidMount() {
        document.onkeydown =  (e) => {
            if (e.keyCode === KEYCODE.ESC) {
                console.log(':::', e.keyCode, KEYCODE.ESC);
                this.setState({
                    isEdit: false,
                    value: this.props.text
                });
            }
        };
    }
    componentWillUnMount() {
        document.onkeydown = null;
    }
    render() {
        const { text, completed, onToggle, onRemove, badgeState } = this.props;
        const { isEdit, value } = this.state;
        return (
            <li style={ completed ? TODOSTYLE.COMPLETED : TODOSTYLE.UNCOMPLETED } onClick={(e) => {
                thisClickTime = new Date().getTime();
                isDoubleClick = thisClickTime - lastClick < doubleClickThreshold;
                lastClick =  thisClickTime
                if (!isDoubleClick) {
                    onToggle();
                } else {
                    return;
                }
            }} onDoubleClick={this.onDoubleClick}>
            { isEdit ? 
                <form onSubmit={this.onSubmit}>
                    <input className="tu-new-todo" placeholder="请修改待办事项" value={value} onChange={this.onInputChange}/>
                </form> : text
            }
            { badgeState && <Badge color={badgeState.color} name={badgeState.name} typeId={badgeState.id} asLabel key={badgeState.id}/>}
            <span onClick={onRemove} className="tu-todo-remove">x</span>
            </li>
        );
    }
}
const getBadgeStateById = (todoTypes, id) => {
    return todoTypes.filter((todoType, i) => {
        return todoType.id === id
    });
}
const mapStateToProps = (state, ownProps) => {
    return {
        badgeState: getBadgeStateById(state.todoTypes, ownProps.typeId)[0]
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps;
    return  {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id)),
        onEdit: ({id, text}) => {
            dispatch(editTodo({id, text}))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(TodoItem);