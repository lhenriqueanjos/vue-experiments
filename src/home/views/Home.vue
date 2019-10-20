<template>
  <main class="home">
    <div class="top-bar">
      <h1>{{ $t('app.name') }}</h1>
    </div>

    <div class="main-content">
      <ExperimentThumbnail
        v-for="experiment in experiments"
        :key="experiment.title"
        :title="experiment.title"
        :description="experiment.description"
        :route="experiment.route"
      />
    </div>
  </main>
</template>

<script>
import { logoPng } from '@/assets';
import ExperimentThumbnail from '../components/ExperimentThumbnail.vue';

export default {
  name: 'Home',
  components: {
    ExperimentThumbnail,
  },
  data() {
    return {
      logoPng,
      experiments: [
        {
          title: this.$t('experiment.lazyLoadedView.name'),
          description: this.$t('experiment.lazyLoadedView.description'),
          route: { name: 'lazyLoadedView' },
        },
        {
          title: this.$t('experiment.scopedSlots.name'),
          description: this.$t('experiment.scopedSlots.description'),
          route: { name: 'scopedSlots' },
        },
        {
          title: this.$t('experiment.criticalCss.name'),
          description: this.$t('experiment.criticalCss.description'),
          route: { name: 'criticalCss' },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  .top-bar {
    height: 56px;
    border-bottom: 1px solid #ccc;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 16px;

    h1 {
      line-height: 1em;
      margin: 0;
    }
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 8px;
  }
}
</style>

<i18n src="./Home.i18n.json" />
