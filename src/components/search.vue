<template>
<yd-search :result="result" style="rgba(151, 151, 151,0.4)" fullpage v-model="value2" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
</template>
<script type="text/babel">
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
    }
}
</script>
<style scoped>

</style>
