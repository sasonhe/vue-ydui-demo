<template>
  <div>
    <div class="amap-wrapper">
      <el-amap :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
.amap-wrapper {
  width: 100%;
  height: 600px;
}
</style>
