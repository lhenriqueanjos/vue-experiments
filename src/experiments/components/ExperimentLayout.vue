<template>
  <main>
    <header>
      <h1>{{ title }}</h1>
    </header>

    <article>
      <slot />
    </article>
  </main>
</template>

<script>
export default {
  name: 'ExperimentLayout',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
