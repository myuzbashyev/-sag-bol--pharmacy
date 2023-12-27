<template>
  <ul class="flex flex-wrap gap-16 justify-center">
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
</template>

<script>
export default {
  props: ["news"],
};
</script>
