import React, { PureComponent } from 'react';
import { KEYCODE, TODOSTYLE } from '../../constants';
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
    componentDidMount() {
        document.onkeydown =  (e) => {
            if (e.keyCode === KEYCODE.ESC) {
                this.setState({
                    isEdit: false
                });
            }
        };
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
        this.setState({
            isEdit: !this.state.isEdit
        });
    } 
    componentWillUnMount() {
        document.onkeydown = null;
    }
    render() {
        const { text, completed, onToggle, onRemove } = this.props;
        const { isEdit, value } = this.state;
        return (
            <li  onClick={onToggle} style={ completed ? TODOSTYLE.COMPLETED : TODOSTYLE.UNCOMPLETED } onDoubleClick={this.onDoubleClick}>
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

export default  TodoItem;