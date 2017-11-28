<template>
<div class="error">
    <h2>{{ msg }}</h2>
</div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Error:404'
        }
    },
    created() {},
    methods: {}
}
</script>

<style scoped>
.error {
    width: 50px;
    margin: 50px auto;
}
</style>
