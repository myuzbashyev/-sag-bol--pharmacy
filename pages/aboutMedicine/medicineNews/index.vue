<template>
  <section>
    <news :news="news.news.articles"></news>
  </section>
</template>

<script>
export default {
  setup() {
    const news = useAllNews();
    news.getNews();
  },
  data() {
    return {
      news: useAllNews(),
    };
  },
};
</script>
