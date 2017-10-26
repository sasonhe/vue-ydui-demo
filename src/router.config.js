// import 组件
import home from './components/home.vue'
import head from './components/header.vue'
import hello from './components/hello.vue'
import lightbox from './components/lightbox.vue'
// import Search from './components/search.vue'
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
    // {
    //     path: '/Search',
    //     name: 'Search',
    //     component: Search
    // }
]
