<template>
  <main>
    <h1>Contador de Pessoas</h1>
    <simple-counter :initial-value="previousCount" />
  </main>
</template>

<script>
import SimpleCounter from './components/SimpleCounter.vue';

export default {
  name: 'PeopleCounter',
  components: {
    SimpleCounter,
  },
  data() {
    return {
      previousCount: 13,
    };
  },
};
</script>

<style>

</style>
