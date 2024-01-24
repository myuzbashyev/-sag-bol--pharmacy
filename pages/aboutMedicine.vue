import customLink from '~/components/customLink';
<template>
  <nuxt-layout>
    <section
      class="px-3 xl:max-w-7xl xl:mx-auto py-10"
      :class="news?.length > 0 || books?.length > 0 ? 'h-full' : 'h-screen'"
    >
      <header class="mb-10">
        <nav>
          <ul
            class="flex flex-col xs:flex-row xs:gap-20 justify-center items-center gap-3"
          >
            <customLink to="/aboutMedicine/medicineNews" class="text-2xl"
              >Täzelikler</customLink
            >
            <customLink to="/aboutMedicine/medicineBooks" class="text-2xl"
              >Kitaplar</customLink
            >
            <customLink to="/aboutMedicine/medicineArticles" class="text-2xl"
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
const { books } = storeToRefs(newsStore);
const { news } = storeToRefs(booksStore);
</script>
