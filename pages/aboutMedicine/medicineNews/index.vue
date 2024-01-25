<template>
  <section class="relative">
    <ProgressSpinner
      v-if="isLoadingNews"
      class="absolute top-48 left-1/2 h-16 w-16"
      stroke-width="4"
    />
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
const { news, isLoadingNews } = storeToRefs(newsStore);
</script>
