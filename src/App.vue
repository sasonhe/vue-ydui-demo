<template>
<yd-layout style="max-width:750px;">
    <yd-navbar slot="navbar">
        <a href="javascript:;" @click="goback" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </a>
        <div slot="center"><span class="yd-navbar-center-title" style="color: rgb(92, 92, 92); font-size: 0.4rem;">{{title}}</span></div>
        <a href="javascript:;" slot="right">
            <yd-icon name="more" style="color: rgb(92, 92, 92);" @click.native="show = true"></yd-icon>
        </a>
    </yd-navbar>
    <yd-popup v-model="show" position="left" width="60%">
        <yd-button type="danger" style="margin: 30px;" @click.native="show = false">Close</yd-button>
    </yd-popup>
    <transition name="slide-fade" mode="out-in">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </transition>
    <yd-tabbar slot="tabbar">
        <yd-tabbar-item title="首页" link="/" exact>
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航2" link="/tabar" exact>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="导航3" link="/scroll" exact>
            <yd-icon name="like-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="个人中心" link="/mycentr" exact>
            <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
</yd-layout>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            value2: '',
            result: []
        }
    },
    computed: {
        title() {
            switch (this.$route.path.split('/')[1]) {
                case '':
                    return "首页"
                case 'home':
                    return "首页"
                case 'tabar':
                    return "美图欣赏"
                case 'scroll':
                    return "导航3"
                case 'mycentr':
                    return "个人中心"
                case 'lightbox0':
                    return "路由"
                case 'position':
                    return "H5地理定位"
            }
        }
    },
    methods: {
        getResult(val) {
            if (!val) return [];
            return ['Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry', 'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other'].filter(value => new RegExp(val, 'i').test(value));
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
        },
        goback() {
            // this.$router.go(-1);
            javascript: history.back(-1)
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

.slide-fade-enter {
    opacity: 0;
}

.slide-fade-leave {
    opacity: 1;
}

.slide-fade-enter-active {
    transition: opacity .3s;
}

.slide-fade-leave-active {
    opacity: 0;
    transition: opacity .3s;
}
</style>
