<template>
  <article class="experiment-thumbnail">
    <router-link
      :to="route"
      class="experiment-link"
    >
      <h2>{{ title }}</h2>

      <p>{{ description }}</p>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'ExperimentThumbnail',
  props: {
    description: {
      type: String,
      required: true,
    },
    route: {
      type: Object,
      default: () => ({ name: 'home' }),
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.experiment-thumbnail {
  padding: 8px;

  border-radius: 4px;
  border: 1px solid #ccc;

  margin-bottom: 8px;

  width: 100%;

  .experiment-link {
    text-decoration: none;
    color: unset;
  }

  h2 {
    line-height: 1em;
    margin: 8px 0;
  }

  p {
    margin: 8px 0;
  }
}
</style>
