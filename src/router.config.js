// import 组件
import head from './components/header.vue'
import hello from './components/hello.vue'
import home from './components/home.vue'
import lightbox from './components/lightbox.vue'
export default [
    // 路由
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/hello',
        name: 'hello',
        component: hello
    },
    {
        path: '/head',
        name: 'head',
        component: head
    },
    {
        path: '/lightbox',
        name: 'lightbox',
        component: lightbox
    }
]
