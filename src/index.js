"use strict"
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
// import AMap from 'vue-amap'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'
// 引入路由配置
import routes from './router.config'
//全局样式重置
// import reset from './common/reset.css'
//
Vue.use(YDUI)
// Vue.use(AMap)
Vue.use(VueRouter)
Vue.use(VueResource)

document.addEventListener('DOMContentLoaded', function () {
    typeof FastClick === 'function' && FastClick.attach(document.body);
}, false)

// AMap.initAMapApiLoader({
//   key: 'b7d8182509200b3c7bc6e08c58043dab',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
// })

var router = new VueRouter({
    // mode: 'history',
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
