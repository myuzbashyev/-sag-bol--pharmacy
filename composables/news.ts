export const useAllNews = defineStore("news", {
  state: () => ({
    news: [],
  }),
  actions: {
    async getNews() {
      const api =
        "https://newsapi.org/v2/everything?q=medicine&from=2023-12-20&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9";
      const data: any = await $fetch(api);
      this.news = data;
    },
  },
});
