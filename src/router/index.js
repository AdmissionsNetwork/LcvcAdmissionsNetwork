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
<<<<<<< HEAD
            path:'/details',
            component: () => import('@/view/Details')
=======
            path:'/introduction',
            component: () => import('@/view/introduction')
        },
        {
            path:'/test',
            component: () => import('@/view/test')
        },
        {
            path:'/table',
            component: () => import('@/view/table')
        },
        {
            path:'/test1',
            component: () => import('@/view/test1')
>>>>>>> c7d75ba2131e69cde8b166bcce4fc29b32f21233
        }
    ]
})