export function useNews() {
  const newsWithoutId = ref([]);
  const newsWithId = ref([]);

  onMounted(async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=medicine&from=${new Date().getFullYear()}.${
          new Date().getMonth() + 1
        }.${
          new Date().getDate() - 7
        }&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9`
      );
      if (response.ok) {
        const data = await response.json();
        newsWithoutId.value = data;
      } else {
        console.error("Failed to fetch items");
      }
      newsWithoutId?.value?.articles.forEach((item) => {
        item.source.id = Math.ceil(Math.random() * 100);
        newsWithId.value.push(item);
      });
    } catch (error) {
      console.error("An error occurred while fetching items:", error);
    }
  });

  return { newsWithId };
}
