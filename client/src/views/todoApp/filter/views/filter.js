import React from 'react';
import Link from './link';
import { FILTERTYPES } from '../../constants';

const Filter = () => {
    return (
        <div className="tu-todo-filters">
            <Link filter={FILTERTYPES.All}>{FILTERTYPES.All}</Link>
            <Link filter={FILTERTYPES.COMPLETED}>{FILTERTYPES.COMPLETED}</Link>
            <Link filter={FILTERTYPES.UNCOMPLETED}>{FILTERTYPES.UNCOMPLETED}</Link>
        </div>
    );
}

export default Filter;