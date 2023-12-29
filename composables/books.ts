export async function useBooks() {
  const booksArray: any = [];
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=medicine+inauthor:keyes&key=AIzaSyCVXg9qd1NtwNPH30wOtbKtTiU3sCJwW0c"
  );
  const data = await response.json();
  booksArray.value = data;
  return data.items;
}
