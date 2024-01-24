<template>
  <section class="relative">
    <i
      v-if="isLoading"
      class="pi pi-spinner pi-spin absolute left-1/2 text-7xl"
    ></i>
    <nav>
      <ul
        class="flex flex-wrap justify-center xs:justify-normal gap-x-2 gap-y-5"
      >
        <UiNewsItem
          v-for="newsItem in news"
          :link="newsItem.publishedAt"
          :key="newsItem.publishedAt"
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
const { news, isLoading } = storeToRefs(newsStore);
</script>
