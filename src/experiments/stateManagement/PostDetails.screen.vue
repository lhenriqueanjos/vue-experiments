<template>
  <article class="post-details">
    <div class="page-title">
      <button @click="goBack">
        ⬅️
      </button>

      <h1 class="post-title">
        {{ post.title }}
      </h1>
    </div>

    <p class="post-body">
      {{ post.body }}
    </p>

    <p v-if="isLoadingPostDetails">
      Carregando comentários...
    </p>

    <div v-else>
      <h2>Comentários</h2>

      <post-comment
        v-for="comment in post.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </article>
</template>

<script>
import { mapState } from 'vuex';
import PostComment from './components/PostComment.vue';

export default {
  name: 'PostDetails',
  components: {
    PostComment,
  },
  // PostDetails
  computed: {
    post() {
      return this.$store.getters.GET_POST_BY_ID(this.$route.params.postId);
    },
    ...mapState(['isLoadingPostDetails']),
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'socialFeed' });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  flex-direction: row;
  align-content: space-between;

  h1 {
    margin: 0;

    text-overflow: ellipsis;
    max-height: 32px;
    overflow: hidden;
    white-space: nowrap;
  }

  button {
    margin: 0 8px;
    font-size: 24px;
  }
}

.post-details {
  padding: 16px;
}
</style>
