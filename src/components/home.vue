<template>
<yd-tabbar fixed>
    <yd-tabbar-item title="首页" link="" :active="true">
        <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="导航1" link="#">
        <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="导航2" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
    </yd-tabbar-item>
    <yd-tabbar-item title="个人中心" link="#">
        <img slot="icon" src="http://static.ydcss.com/ydui/img/logo.png">
    </yd-tabbar-item>
</yd-tabbar>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {},
    methods: {}
}
</script>

<style>
</style>
