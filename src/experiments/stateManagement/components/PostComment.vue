<template>
  <div>
    <p>
      <strong>
        {{ comment.email }}
      </strong>

      {{ comment.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'PostComment',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>

</style>
