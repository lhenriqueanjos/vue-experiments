<template>
  <article class="post-details">
    <h1 class="post-title">
      {{ post.title }}
    </h1>

    <p class="post-body">
      {{ post.body }}
    </p>
  </article>
</template>

<script>
export default {
  name: 'PostDetails',
};
</script>

<style lang="scss" scoped>
.post-details {

}
</style>
