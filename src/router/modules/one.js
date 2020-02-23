export default {
    path: '/one',
    name: 'OneBase',
    meta: {
        title: "One"
    },
    component:  () => import("@/layout/BaseLayout"),
    children: [
        {
            path: 'index',
            name: 'One',
            meta: {
                title: '一个',
            },
            component: () => import('@/views/one/index')
        },
    ]
}