<template>
  <ul class="flex flex-wrap gap-16 justify-center">
    <UiNewsItem
      v-for="newsItem in news"
      :link="newsItem.source.id"
      :key="newsItem.source.id"
      :image="newsItem.urlToImage"
      :title="newsItem.title"
      :description="`${newsItem.description.split(' ', 10).join(' ')}...`"
      :published-at="newsItem.publishedAt.split('T', 1).join('')"
    ></UiNewsItem>
  </ul>
</template>

<script>
export default {
  props: ["news"],
};
</script>
