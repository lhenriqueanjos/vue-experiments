<template>
  <main class="home">
    <div class="top-bar">
      <h1>🔬 Vue Experiments</h1>
    </div>

    <div class="main-content">
      <div class="experiment-thumbnail">
        <router-link
          :to="{ name: 'lazyLoadedView'}"
          class="experiment-link"
        >
          <h2>😴 Lazy loaded route</h2>

          <p>
            Como utilizar a feature de split do bundle para
            postergar o carregamento de uma rota.
          </p>
        </router-link>
      </div>

      <div class="experiment-thumbnail">
        <router-link
          :to="{ name: 'scopedSlots'}"
          class="experiment-link"
        >
          <h2>🔬 Scoped slots</h2>

          <p>
            Exemplo de componente DataProvider utilizando
            scoped slots.
          </p>
        </router-link>
      </div>

      <div class="experiment-thumbnail">
        <router-link
          :to="{ name: 'criticalCss'}"
          class="experiment-link"
        >
          <h2>💋 Critical CSS</h2>

          <p>
            Usando o critter para colocar o CSS crítico
            como inline e o restante como um arquivo.
          </p>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
import { logoPng } from '@/assets';

export default {
  name: 'Home',
  components: {
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
  }
}
</style>
