import customLink from '~/components/customLink';
<template>
  <nuxt-layout>
    <section
      class="px-3 xl:max-w-7xl xl:mx-auto py-10"
      :class="isLoadingBooks || isLoadingNews ? 'h-screen' : 'h-screen'"
    >
      <header class="mb-10">
        <nav>
          <ul
            class="flex justify-center items-center gap-4 text-lg sx:gap-10 sx:text-2xl xs:gap-20"
          >
            <customLink to="/aboutMedicine/medicineNews">Täzelikler</customLink>
            <customLink to="/aboutMedicine/medicineBooks">Kitaplar</customLink>
            <customLink to="/aboutMedicine/medicineArticles"
              >Makalalar</customLink
            >
          </ul>
        </nav>
      </header>
      <nuxt-page></nuxt-page>
    </section>
  </nuxt-layout>
</template>

<script setup>
const booksStore = useBooks();
const newsStore = useNews();
const { isLoadingNews } = storeToRefs(newsStore);
const { isLoadingBooks } = storeToRefs(booksStore);
</script>
