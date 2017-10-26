<template>
<yd-layout style="max-width:100%;">
    <yd-navbar slot="navbar">
        <router-link to="/" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        <div slot="center"><span class="yd-navbar-center-title" style="color: rgb(92, 92, 92); font-size: 0.4rem;">{{title}}</span></div>
        <a href="javascript:;" slot="right">
            <yd-icon name="more" style="color: rgb(92, 92, 92);" @click.native="show = true"></yd-icon>
        </a>
    </yd-navbar>
    <yd-popup v-model="show" position="left" width="60%">
        <yd-button type="danger" style="margin: 30px;" @click.native="show = false">Close</yd-button>
    </yd-popup>
    <transition name="slide-fade">
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
                    return "子路由"
            }
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

.slide-fade-enter-active {
    transition: all 0.6s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translate3d(100%, 0, 0);
}
</style>
