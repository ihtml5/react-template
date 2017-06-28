;
export default {
    path: 'todos',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        // 在后面加 .default
        cb(null, require('../todoApp').default)
    });
   }
}