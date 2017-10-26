// import 组件
import home from './components/home.vue'
import scroll from './components/scroll.vue'
import tabar from './components/tabar.vue'
import lightbox from './components/lightbox.vue'
import lightbox0 from './components/lightbox0.vue'
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
        path: '/lightbox',
        name: 'lightbox',
        component: lightbox
    },
    {
        path: '/lightbox0',
        name: 'lightbox0',
        component: lightbox0
    }
]
