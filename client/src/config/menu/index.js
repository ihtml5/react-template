const accordionData = [{
    title: 'React核心',
    list: [{
    text: '状态和属性',
    href: '/core/stateprops',
    isRouter: true,
    isIndexLink: true
    }, {
    text: '生命周期',
    href: '/core/lifecycle',
    isRouter: true
}, {
    text: '表单',
    href: '/core/form',
    isRouter: true
},{
    text: '事件',
    href: '/core/event',
    isRouter: true
}]
},  {
    title: 'React高级',
    list: [{
    text: '高阶组件',
    href: '/advance/hoc',
    isRouter: true
    }, {
    text: '服务端渲染',
    href: '/advance/server',
    isRouter: true
}, {
    text: '测试',
    href: '/advance/test',
    isRouter: true
}]
}, {
    title: '状态管理',
    list: [{
    text: 'redux',
    href: '/state/redux',
    isRouter: true,
    }]
}, {
    title: 'React showCase',
    list: [{
    text: 'home',
    href: '/',
    isRouter: true,
    isIndexLink: true
    }, {
    text: 'todos',
    href: '/todos',
    isRouter: true
}]}]

export default accordionData;