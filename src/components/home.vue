<template>
<div>
    <yd-search fixed :result="result" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
    <slider></slider>
    <grids></grids>
</div>
</template>

<script type="text/babel">
import slider from './slider.vue'
import grids from './grids.vue'
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
        grids
    }
}
</script>
