<template>
  <h1 class="blue">about</h1>
  <HelloWorld />
</template>
<script>
import HelloWorld from 'components/helloworld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  .blue {
    color: blueviolet;
  }
</style>