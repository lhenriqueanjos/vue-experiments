<template>
  <div>
    <p>Contagem atual:</p>
    <p>{{ value }}</p>
    <button
      @click="increment()"
    >
      Incrementar
    </button>
  </div>
</template>

<script>
export default {
  name: 'SimpleCounter',
  props: {
    initialValue: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  mounted() {
    this.value = this.initialValue;
  },
  methods: {
    increment() {
      this.value = this.value + 1;
    },
  },
};
</script>

<style>

</style>
