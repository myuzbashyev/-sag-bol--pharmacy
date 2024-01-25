export const useBooks = defineStore("books", {
  state: () => ({
    books: [],
    isLoadingBooks: false,
  }),
  actions: {
    async getBooks() {
      this.isLoadingBooks = true;
      const fetchedBooks: any = await $fetch(
        "https://www.googleapis.com/books/v1/volumes?q=pharmacy+inauthor:keyes&key=AIzaSyCVXg9qd1NtwNPH30wOtbKtTiU3sCJwW0c"
      );
      this.books = fetchedBooks.items;
      this.isLoadingBooks = false;
    },
  },
});
