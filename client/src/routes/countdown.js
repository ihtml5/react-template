export default {
    path: 'countdown',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        // 在后面加 .default
        cb(null, require('../pages/').CountDown)
    }, 'countdown');
   }
}