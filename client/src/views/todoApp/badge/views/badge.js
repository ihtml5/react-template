import React from 'react';

const Badge = ({color, name,selected, onSelectTodoType, typeId, asLabel}) => <div style={{backgroundColor: color, border: selected ? '1px solid #333' : 'none'}} className= {!asLabel ? `tu-badge` : `tu-badge tu-badge-asLabel`} onClick={() => {onSelectTodoType && onSelectTodoType(typeId);}}>{name}</div>;

export default Badge;