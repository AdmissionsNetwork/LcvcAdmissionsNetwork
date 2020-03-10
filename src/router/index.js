import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            component: () => import('@/view/Index')
        },
        {
            path:'/software',
            component: () => import('@/view/Details')
        },
        {
            path:'/bigdata',
            component: () => import('@/view/Details')
        },
        {
            path:'/computerapplication',
            component: () => import('@/view/Details')
        },
        {
            path:'/drone',
            component: () => import('@/view/Details')
        },
        {
            path:'/anime',
            component: () => import('@/view/Details')
        },
        {
            path:'/digitalmedia',
            component: () => import('@/view/Details')
        },
        {
            path:'/e-commerce',
            component: () => import('@/view/Details')
        }
    ]
})
