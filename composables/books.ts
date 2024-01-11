export const useBooks = defineStore("books", {
  state: () => ({
    books: [],
  }),
  actions: {
    async getBooks() {
      const fetchedBooks: any = await $fetch(
        "https://www.googleapis.com/books/v1/volumes?q=pharmacy+inauthor:keyes&key=AIzaSyCVXg9qd1NtwNPH30wOtbKtTiU3sCJwW0c"
      );
      this.books = fetchedBooks.items;
    },
  },
});
