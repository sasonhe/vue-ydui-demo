<template>
<div>
    <yd-tabbar fixed>
        <yd-tabbar-item title="首页" link="#/lightbox" :active="true">
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航1" link="#">
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航2" link="#">
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="#">
            <yd-icon name="like-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</div>
</template>
<script>
export default {
    components: {}
}
</script>
<style scoped>

</style>
