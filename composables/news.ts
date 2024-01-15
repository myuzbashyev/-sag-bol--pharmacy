export const useNews = defineStore("news", {
  state: () => ({
    news: [],
  }),
  getters: {
    date() {
      return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
        new Date().getDate() - 7
      }`;
    },
  },
  actions: {
    async getNews() {
      const fetchedNews: any = await $fetch(
        `https://newsapi.org/v2/everything?q=medicine&from=${this.date}&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9`
      );
      this.news = fetchedNews.articles;
    },
  },
});
