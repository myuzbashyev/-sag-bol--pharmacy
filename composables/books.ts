// export const useAllBooks = defineStore("books", {
//   state: () => ({
//     books: [],
//   }),
//   actions: {
//     async fetchBooks() {
//       const fetchedBooks = await $fetch(
//         "https://www.googleapis.com/books/v1/volumes?q=pharmacy+inauthor:keyes&key=AIzaSyCVXg9qd1NtwNPH30wOtbKtTiU3sCJwW0c"
//       );
//       this.books = fetchedBooks;
//     },
//   },
// });
