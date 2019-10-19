<template>
  <main class="home">
    <div class="top-bar">
      <h1>🔬 Vue Experiments</h1>
    </div>

    <div class="main-content">
      <ExperimentThumbnail
        title="😴 Lazy loaded route"
        description="Como utilizar a feature de split do bundle para
          postergar o carregamento de uma rota."
        :experiment-route="{ name: 'lazyLoadedView'}"
      />

      <ExperimentThumbnail
        title="🔬 Scoped slots"
        description="Exemplo de componente DataProvider utilizando
          scoped slots."
        :experiment-route="{ name: 'scopedSlots'}"
      />

      <ExperimentThumbnail
        title="💋 Critical CSS"
        description="Usando o critter para colocar o CSS crítico
            como inline e o restante como um arquivo."
        :experiment-route="{ name: 'criticalCss'}"
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
