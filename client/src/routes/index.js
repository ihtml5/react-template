const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('../App').default,
    childRoutes: [
      require('./home').default,
      require('./todos').default,
    ]
  }, {
    path: '/core',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
        // 在后面加 .default
        cb(null, require('../App').default)
      }, 'index')
    }
  }]
}

export default rootRoute;