<template>
<div>
    <v-header></v-header>
    <lightbox></lightbox>
    <home></home>
</div>
</template>
<script>
import home from './components/home.vue'
import header from './components/header.vue'
import lightbox from './components/lightbox.vue'
export default {
    components: {
        home,
        "v-header": header,
        lightbox
    }
}
</script>
<style scoped>

</style>
