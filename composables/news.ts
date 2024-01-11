export const useNews = defineStore("news", {
  state: () => ({
    news: [],
  }),
  actions: {
    async getNews() {
      const fetchedNews: any = await $fetch(
        "https://newsapi.org/v2/everything?q=medicine&from=2023-12-20&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9"
      );
      this.news = fetchedNews.articles;
    },
  },
});
