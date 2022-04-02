<template>
  <h1>i am asyncComponent {{count}}</h1>
</template>
<script>
export default {
  data() {
    return {
      count: 1
    }
  },
  created() {
    console.log('asyncComponent created');
    setTimeout(() => {
      this.count++
    }, 2000);
  }
}
</script>
<style lang="less">
h1{
  color: blueviolet;
}
</style>