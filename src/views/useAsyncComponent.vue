<template>
  <div>home</div>
  <asyncComponent />
</template>
<script>
import { defineAsyncComponent } from 'vue';

export default {
  created() {},
  components: {
    // asyncComponent: defineAsyncComponent(() => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({
    //         template: '<h1>i am asyncComponent {{count}}</h1>',
    //         data() {
    //           return {
    //             count: 1,
    //           };
    //         },
    //         created() {
    //           console.log('asyncComponent created');
    //           setTimeout(() => {
    //             this.count++;
    //           }, 2000);
    //         },
    //       });
    //     }, 5000);
    //   });
    // }),
    asyncComponent: defineAsyncComponent(() => import('../components/asyncComponent.vue'))
  },
};
</script>