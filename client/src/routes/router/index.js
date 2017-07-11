export default {
    path: 'react-router',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        // 在后面加 .default
        cb(null, require('../../pages/').RouterCnt)
    }, 'reactrouter');
   }
}