<template>
  <section>
    <nav>
      <ul class="flex flex-wrap gap-x-2 gap-y-5">
        <UiNewsItem
          v-for="newsItem in news"
          :link="newsItem.publishedAt.split('T')[1]"
          :key="newsItem.publishedAt.split('T')[1]"
          :image="newsItem.urlToImage"
          :title="newsItem.title"
          :description="newsItem.description"
          :published-at="newsItem.publishedAt"
        ></UiNewsItem>
      </ul>
    </nav>
  </section>
</template>

<script setup>
const newsStore = useNews();
newsStore.getNews();
const { news } = storeToRefs(newsStore);
</script>
