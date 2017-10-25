<template>
<div>
    <yd-search :result="result" style="rgba(151, 151, 151,0.4)" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
    <!-- <yd-navbar title="首页" fixed bgcolor="rgba(151, 151, 151,0.4)">
        <a href="javascript:;" slot="right">
            <yd-icon name="more" style="color: rgb(92, 92, 92);"></yd-icon>
        </a>
    </yd-navbar> -->
    <!-- <yd-navbar fixed>
        <router-link to="#" slot="right">
            <yd-icon name="ucenter-outline"></yd-icon>
        </router-link>
    </yd-navbar> -->
    <slider></slider>
    <grids></grids>
    <homeList></homeList>
</div>
</template>

<script type="text/babel">
import slider from './slider.vue'
import grids from './grids.vue'
import homeList from './homeList.vue'
export default {
    data() {
        return {
            value2: '',
            result: []
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
    },
    components: {
        slider,
        grids,
        homeList
    }
}
</script>
