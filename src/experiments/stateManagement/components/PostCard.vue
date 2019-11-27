<template>
  <article class="post-card">
    <h2 class="post-title">
      {{ title }}
    </h2>

    <p class="post-body">
      {{ body }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    body: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>

.post-card {
  padding: 8px;

  border-radius: 4px;
  border: 1px solid #ccc;

  margin-bottom: 8px;

  width: 100%;
}

.post-title {
  line-height: 1em;
  margin: 0;
}

.post-body  {
  margin: 0;
}
</style>
