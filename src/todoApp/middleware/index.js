const localStorageMw = store => next => action => {
    next(action)
    const todos = store.getState().todos;
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

export {
    localStorageMw
}
