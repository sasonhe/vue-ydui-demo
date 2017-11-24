// import 组件
import home from './page/home.vue'
import scroll from './page/scroll.vue'
import tabar from './page/tabar.vue'
import mycentr from './page/mycentr.vue'
import lightbox0 from './components/lightbox0.vue'
import position from './components/position.vue'
import error from './page/error.vue'
export default [
    // 路由

    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/tabar',
        name: 'tabar',
        component: tabar
    },
    {
        path: '/scroll',
        name: 'scroll',
        component: scroll
    },
    {
        path: '/mycentr',
        name: 'mycentr',
        component: mycentr
    },
    {
        path: '/lightbox0',
        name: 'lightbox0',
        component: lightbox0
    },
    {
        path: '/position',
        name: 'position',
        component: position
    },
    {
       path:'*',
       component:error
    }
]
