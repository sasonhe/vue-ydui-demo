<template>
    <yd-popup v-model="show" position="left" width="40%">
        <yd-button type="danger" style="margin: 30px;" @click.native="show = false">Close</yd-button>
    </yd-popup>
</template>
<script>
export default{
    data() {
        return {
            show: false
        }
    },
    components:{

    }
}
</script>
<style scoped>

</style>
