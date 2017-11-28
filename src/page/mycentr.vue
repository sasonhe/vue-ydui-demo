<template>
<div>
    <h1>Hello World</h1>
    <yd-countdown time="2018/01/01 00:00:00" class="time"></yd-countdown>
</div>
</template>
<script>
export default {
    components: {

    }
}
</script>
<style scoped>
div {
    width: 100%;
    text-align: center;
    margin: 50px auto;
}

h1 {
    font-weight: normal;
    font-size: 0.4rem;
    margin-bottom: 0.4rem;
}

.time {
    font-size: 0.4rem;
}
</style>
