import React from 'react';

const TodoItem = ({text, completed, onToggle, onRemove}) => (
   <li onClick={onToggle} style={
       { 
           textDecoration: completed ? "line-through" : 'none',
           color: completed ? '#aaa' : '#333'
       }
    }>
       {text}
       <span onClick={onRemove} className="tu-todo-remove">x</span>
    </li>
);
export default  TodoItem;