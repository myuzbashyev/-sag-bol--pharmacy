<template>
  <section class="bg-white p-10 rounded-lg">
    <article class="flex gap-16 mb-10 items-end">
      <img class="w-96 h-64 rounded-lg" :src="newsItem.urlToImage" />
      <div>
        <div class="flex gap-20">
          <p>{{ newsItem.publishedAt.split("T")[0] }}</p>
          <p>{{ newsItem.author ? newsItem.author : "Неизвестный автор" }}</p>
        </div>
        <h1 class="text-2xl font-bold">{{ newsItem.title }}</h1>
      </div>
    </article>
    <article>
      <p>{{ newsItem.description }}</p>
    </article>
  </section>
</template>

<script setup>
const newsStore = useNews();
const { news } = storeToRefs(newsStore);
const newsItem = news.value.find(
  (item) => item.publishedAt.split("T")[1] === useRoute().params.id
);
</script>
