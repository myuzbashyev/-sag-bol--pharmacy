export async function useNews() {
  const newsArray: any = [];
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=medicine&from=2023-12-20&sortBy=publishedAt&language=ru&apiKey=3921f5cb9524428e84e459b368cddfb9"
    );
    const data = await response.json();
    newsArray.value = data;
  } catch (e) {
    console.log(e);
  }
  return newsArray.value.articles;
}
