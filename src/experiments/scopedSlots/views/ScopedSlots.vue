<template>
  <main>
    <DataProvider url="https://jsonplaceholder.typicode.com/users">
      <template v-slot="{ data, loading }">
        <div v-if="loading">
          {{ $t('message.info.loading') }}
        </div>
        <div v-else>
          <h2>
            {{ $t('label.result') }}:
            {{ $tc('message.info.result', data.length, { count: data.length }) }}
          </h2>
          <ol>
            <li
              v-for="user in data"
              :key="user.id"
            >
              {{ user.name }}
            </li>
          </ol>
        </div>
      </template>
    </DataProvider>
    <p>
      {{ $t('label.reference') }}:
      <a
        href="https://vuedose.tips/tips/data-provider-component-in-vue-js/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Data Provider component in Vue.js
      </a>
    </p>
  </main>
</template>

<script>
import { DataProvider } from '@/components';

export default {
  name: 'ScopedSlots',
  components: {
    DataProvider,
  },
};
</script>

<i18n src="./ScopedSlots.i18n.json" />
