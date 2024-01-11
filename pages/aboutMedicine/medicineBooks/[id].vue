<template>
  <section>
    <div class="bg-white p-5 rounded-lg">
      <div class="flex gap-10">
        <img
          v-if="bookItem.volumeInfo?.imageLinks?.thumbnail !== undefined"
          :src="bookItem.volumeInfo?.imageLinks?.thumbnail"
          alt="Book image"
        />
        <div>
          <h1 class="text-3xl">{{ bookItem.volumeInfo?.title }}</h1>
          <nav class="mb-10 mt-4">
            <ul>
              <li>
                <span class="font-bold">Awtor :</span>
                <span class="ml-1">{{
                  bookItem.volumeInfo?.authors?.join("")
                }}</span>
              </li>
              <li>
                <span class="font-bold">Kategoriýa :</span>
                <span class="ml-1">{{
                  bookItem.volumeInfo?.categories?.join("")
                }}</span>
              </li>
              <li>
                <span class="font-bold">Çykarylan senesi :</span>
                <span class="ml-1">{{
                  bookItem.volumeInfo?.publishedDate
                }}</span>
              </li>
              <li>
                <span class="font-bold">Sahypa sany :</span>
                <span class="ml-1">{{ bookItem.volumeInfo?.pageCount }}</span>
              </li>
            </ul>
          </nav>
          <nuxt-link
            :to="bookItem.volumeInfo?.previewLink"
            target="_blank"
            class="bg-lint py-3 px-5 rounded-lg transition-colors ease-in-out hover:bg-lint-1"
            >Online okamak</nuxt-link
          >
        </div>
      </div>
      <article class="mt-10">
        <h1 class="text-2xl">Kitap bilen tanyşdyrylyş</h1>
        <p class="mt-3">{{ bookItem.volumeInfo?.description }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const booksStore = useBooks();
const { books } = storeToRefs(booksStore);
const bookItem = books.value.find((item) => item.id === useRoute().params.id);
</script>
