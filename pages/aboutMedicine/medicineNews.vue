import { Paginator } from "#build/components";
<template>
  <section>
    <news :news="data.articles"></news>
    <Paginator
      :rows="10"
      :total-records="10"
      :rows-per-page-options="data.articles.length"
    ></Paginator>
  </section>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData("news", () =>
  $fetch(
    "https://newsapi.org/v2/everything?q=health&from=2023-12-112&to=2023-12-19&sortBy=popularity&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9"
  )
);
</script>
