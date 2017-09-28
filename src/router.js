const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/chart',
    meta: {
        title: '图表'
    },
    component: (resolve) => require(['./views/chart.vue'], resolve)
}, {
    path: '/carousel',
    meta: {
        title: '轮播图'
    },
    component: (resolve) => require(['./views/carousel.vue'], resolve)
}, {
    path: '/container',
    meta: {
        title: '容器'
    },
    component: (resolve) => require(['./views/container.vue'], resolve)
}, {
    path: '/form',
    meta: {
        title: '表单'
    },
    component: (resolve) => require(['./views/form.vue'], resolve)
}, {
    path: '/message',
    meta: {
        title: '消息'
    },
    component: (resolve) => require(['./views/message.vue'], resolve)
}, {
    path: '/table',
    meta: {
        title: '表格'
    },
    component: (resolve) => require(['./views/table.vue'], resolve)
}];
export default routers;