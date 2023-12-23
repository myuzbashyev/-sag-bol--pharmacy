export function useItems() {
  const items = ref([]);
  const idNews = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=medicine&from=2023-12-15&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9"
      );
      if (response.ok) {
        const data = await response.json();
        items.value = data;
      } else {
        console.error("Failed to fetch items");
      }
      items.value.articles.forEach((item) => {
        item.source.id = Math.ceil(Math.random()) * 100;
        idNews.value.push(item);
      });
      console.log(idNews.value);
    } catch (error) {
      console.error("An error occurred while fetching items:", error);
    }
  });

  return {
    idNews,
  };
}
