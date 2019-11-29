<template>
  <main class="social-feed">
    <div class="page-title">
      <button @click="goBack">
        ⬅️
      </button>

      <h1>
        Publicações
      </h1>

      <button @click="updatePosts">
        🔁
      </button>
    </div>

    <p v-if="isLoadingPosts">
      Aguarde...
    </p>

    <post-card
      v-for="post in posts"
      v-else
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :body="post.body"
      @click.native="() => goToPostDetails(post)"
    />
  </main>
</template>

<script>
import { mapState } from 'vuex';
import PostCard from './components/PostCard.vue';

export default {
  name: 'SocialFeed',
  components: {
    PostCard,
  },
  computed: {
    ...mapState(['posts', 'isLoadingPosts']),
  },
  mounted() {
    if (this.posts === null) {
      this.updatePosts();
    }
  },
  methods: {
    updatePosts() {
      this.$store.dispatch('GET_POSTS');
    },
    goBack() {
      this.$router.push({ name: 'home' });
    },
    goToPostDetails(post) {
      this.$store.dispatch('GET_POST_DETAILS', post.id);
      this.$router.push({
        name: 'postDetails',
        params: { postId: post.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.social-feed {
  padding: 16px;
}

.page-title {
  display: flex;
  flex-direction: row;
  align-content: space-between;
  margin-bottom: 16px;

  max-height: 32px;

  h1 {
    margin: 0;
  }

  button {
    margin: 0 8px;
    font-size: 24px;
  }
}
</style>
