<template>
<yd-tab>
    <yd-tab-panel label="选项一">
        <button type="button" name="button" v-on:click="active">123</button>1
    </yd-tab-panel>
    <yd-tab-panel label="选项二">2</yd-tab-panel>
    <yd-tab-panel label="选项三">3</yd-tab-panel>
    <yd-tab-panel label="选项四">4</yd-tab-panel>
</yd-tab>
</template>

<script type="text/babel">
export default {
    methods: {
        active: function() {
            alert(1)
        }
    }
}
</script>
