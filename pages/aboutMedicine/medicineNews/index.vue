<template>
  <section>
    <!-- <news :news="news"></news> -->
    <button @click="click">click</button>
  </section>
</template>

<!-- <script>
export default defineNuxtComponent({
  fetchKey: "news",
  async asyncData() {
    return {
      news: await $fetch(
        "https://newsapi.org/v2/everything?q=medicine&from=2023-12-15&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9"
      ),
      newsWithId: [],
    };
  },
  async mounted() {
    try {
      await this.news.articles.forEach((newsItem) => {
        newsItem.source.id = Math.ceil(Math.random() * 100);
        this.newsWithId.push(newsItem);
      });
    } catch (e) {
      console.log(e);
    }
  },
});
</script> -->

<script setup>
const { idNews } = useItems();
function click() {
  console.log(idNews.value);
}
</script>
