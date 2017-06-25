import React, { PureComponent } from 'react';
import { KEYCODE, TODOSTYLE } from '../../constants';
import { toggleTodo, removeTodo } from '../actions';
import { connect } from 'react-redux';
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
        if (!inputVal.trim()) {
            alert('待办事项不能为空');
            return;
        }
        this.props.onEdit(this.state.value);
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
        const { text, completed, onToggle, onRemove } = this.props;
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
            <span onClick={onRemove} className="tu-todo-remove">x</span>
            </li>
        );
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps;
    return  {
        onToggle: () => dispatch(toggleTodo(id)),
        onRemove: () => dispatch(removeTodo(id))
    }
}
export default  connect(null, mapDispatchToProps)(TodoItem);