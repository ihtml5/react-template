const rootRoute = {
  childRoutes: [ {
    path: '/',
    indexRoute: require('./home').default,
    component: require('../App').default,
    childRoutes: [
      require('./home').default,
    ]
  },{
    path: '/case',
    component: require('../App').default,
    childRoutes: [
      require('./todos').default,
      require('./counter').default,
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