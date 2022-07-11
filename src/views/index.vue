<template>
  <div>hello world {{count}}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { addTwo } from './../utils/math';
export default defineComponent({
  data() {
    return {
      count: 2
    } 
  },
  mounted() {
    addTwo(3)
  }
})
</script>