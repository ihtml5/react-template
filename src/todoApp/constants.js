const All = 'all';
const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';
const ESC = 27;
export const FILTERTYPES = {
    All,
    COMPLETED,
    UNCOMPLETED
}

export const KEYCODE = {
    ESC
}

export const TODOSTYLE = {
    COMPLETED:  { 
        textDecoration: "line-through",
        color: '#aaa'
    },
    UNCOMPLETED: {
        textDecoration: 'none',
        color: '#333'
    }
}