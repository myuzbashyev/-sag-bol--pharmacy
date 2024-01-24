<template>
  <section>
    <i class="pi pi-spinner"></i>
    <nav>
      <ul
        class="flex flex-wrap justify-center xs:justify-normal gap-x-2 gap-y-5"
      >
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
const { books, isLoading } = storeToRefs(booksStore);
</script>
