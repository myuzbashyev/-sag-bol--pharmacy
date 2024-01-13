<template>
  <nuxt-layout>
    <section class="container py-10 h-screen">
      <nav>
        <ul class="flex flex-wrap gap-x-1 gap-y-5">
          <UiCard
            v-for="searchItem in search"
            :id="searchItem.id"
            :title="searchItem.title"
            :price="searchItem.price"
            :img="searchItem.img"
            :pharmacy="searchItem.pharmacy"
            :route="`/category/${searchItem.category}/${searchItem.subcategory}/${searchItem.id}`"
            :is-fav="searchItem.isFav"
          >
          </UiCard>
        </ul>
      </nav>
    </section>
  </nuxt-layout>
</template>

<script setup>
const allItemsStore = useAllItems();
const { search } = storeToRefs(allItemsStore);
</script>
