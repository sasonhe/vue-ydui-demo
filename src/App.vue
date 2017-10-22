<template>
<div>
    <yd-tabbar fixed>
        <yd-tabbar-item title="首页" link="/" exact>
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航1" link="/hello" exact>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航2" link="/head" exact>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/lightbox">
            <yd-icon name="like-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>
</template>
<script>
export default {
    components: {}
}
</script>
<style scoped>
.router-link-active {
    color: rgb(9, 187, 7);
}
</style>
