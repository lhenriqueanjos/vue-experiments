<template>
  <div class="home">
    <img
      alt="Vue logo"
      :src="logoPng"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { logoPng } from '@/assets';
import { HelloWorld } from '@/components';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      logoPng,
    };
  },
};
</script>
