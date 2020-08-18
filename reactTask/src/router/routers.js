const config = [
    {
        path: '/test',
        meta: {
            title: '测试'
        },
        component: () => import('../views/test'),
    },
    {
        path: '/react/test2',
        meta: {
            title: '嵌套路由'
        },
        component: () => import('../views/test2'),
    },
    {
        path: '/react',
        meta: {
            title: 'react项目'
        },
        component: () => import('../views/index'),
    }
];

export default config;
