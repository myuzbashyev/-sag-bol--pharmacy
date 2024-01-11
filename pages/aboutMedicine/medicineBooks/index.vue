<template>
  <section>
    <nav>
      <ul class="flex flex-wrap gap-x-2 gap-y-5">
        <UiBookItem
          v-for="bookItem in books"
          :id="bookItem.id"
          :image="bookItem?.volumeInfo.imageLinks?.smallThumbnail"
          :title="bookItem?.volumeInfo?.title"
          :author="bookItem?.volumeInfo?.authors.join(' , ')"
        >
        </UiBookItem>
      </ul>
    </nav>
  </section>
</template>

<script setup>
const booksStore = useBooks();
booksStore.getBooks();
const { books } = storeToRefs(booksStore);
</script>
