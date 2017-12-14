"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'
// 引入路由配置
import routes from './router.config'

// 全局注册
Vue.use(YDUI)
// 注册路由
Vue.use(VueRouter)
// 注册http
Vue.use(VueResource)
// 解决点击事件延迟
document.addEventListener('DOMContentLoaded', function() {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false)

var router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})