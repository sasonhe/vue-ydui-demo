<template>
<yd-layout style="max-width:100%;">
    <yd-navbar slot="navbar">
        <!-- <router-link to="/lightbox" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link> -->
        <div slot="center"><span class="yd-navbar-center-title" style="color: rgb(92, 92, 92); font-size: 0.4rem;">{{title}}</span></div>
        <router-link to="/head" slot="right">
            <yd-icon name="ucenter-outline"></yd-icon>
        </router-link>
    </yd-navbar>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="首页" link="/" exact>
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航1" link="/hello" exact>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航2" link="/head" exact>
            <yd-icon name="like-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/lightbox" exact>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</yd-layout>
</template>
<script>
export default {
    props:{

    },
    data() {
        return {
            value2: '',
            result: [],
            title:'导航'
        }
    },
    methods: {
        getResult(val) {
            if (!val) return [];
            return [
                'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'
            ].filter(value => new RegExp(val, 'i').test(value));
        },
        itemClickHandler(item) {
            this.$dialog.toast({
                mes: `搜索：${item}`
            });
        },
        submitHandler(value) {
            this.$dialog.toast({
                mes: `搜索：${value}`
            });
        }
    },
    watch: {
        value2(val) {
            this.result = this.getResult(val);
        }
    }
}
</script>
<style scoped>
.router-link-active {
    color: rgb(9, 187, 7) !important;
}
</style>
