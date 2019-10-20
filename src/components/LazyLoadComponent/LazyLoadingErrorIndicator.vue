<template>
  <p>{{ $t('message.error.cannotLoadRoute') }}</p>
</template>

<script>
export default {
  name: 'LazyLoadingErrorIndicator',
};
</script>

<i18n>
{
  "pt-BR": {
    "message": {
      "error": {
        "cannotLoadRoute": "Erro ao carregar tela 😞"
      }
    }
  }
}
</i18n>
