import { INIT_MENU } from './actionTypes';
const data = [{
  title: '简介',
  list: [{
    text: '依赖',
    href: '#user-content-依赖'
  },{
    text: '理念',
    href: '#user-content-理念'
  },{
    text: '如何快速构建一个模块',
    href: '#user-content-如何快速构建一个模块'
  },{
    text: '项目中的使用方式',
    href: '#user-content-项目中使用方式'
  }]
}, {
  title: '核心API',
  list: [{
    text: 'get',
    href: '/todos',
    isRouter: true
  },{
    text: 'regesiter',
    href: '#base-apiRegesiter'
  },{
    text: 'utils',
    href: '#base-apiUtils'
  }]
}, {
  title: '常用功能函数',
  list: [{
    text: 'extend',
    href: '#base-extend'
  }, {
    text: 'support',
    href: '#base-support'
  }, {
    text: 'getAllOptions',
    href: '#base-getAllOptions'
  }, {
    text: 'getInstance',
    href: '#base-getInstance'
  }, {
    text: 'autoInput',
    href: '#base-autoInput'
  }, {
    text: 'eventProxy',
    href: '#base-eventProxy'
  }, {
    text: 'autoProxyTrigger',
    href: '#base-autoProxyTrigger'
  }, {
    text: 'prefixPath',
    href: '#base-perfixPath',
  }, {
    text: 'ajax',
    href: '#base-ajax'
  }, {
    text: 'setUrls',
    href: '#base-setUrls'
  }, {
    text: 'resetRoot',
    href: '#base-resetRoot'
  }]
}];
const initMenu = (state=data, action) => {
    switch( action.type) {
        case INIT_MENU:
            return action.data || state;
        default:
            return state;
    }
}

export default  initMenu;