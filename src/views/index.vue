<template>
  <div>hello world {{count}}</div>
  <hello></hello>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { addTwo } from './../utils/math';
import hello from './../components/helloworld.vue'
export default defineComponent({
  data() {
    return {
      count: 2
    } 
  },
  components: {
    hello
  },
  mounted() {
    console.log(addTwo(6));
  }
})
</script>