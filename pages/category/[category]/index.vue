<template>
  <NuxtLayout>
    <section class="px-3 xl:max-w-7xl mx-auto py-10">
      <h1 class="text-2xl font-bold text-forest-green">
        {{ filteredCategory.label }}
      </h1>
      <nav class="py-5 border-b border-forest-green mb-5">
        <ul class="flex flex-wrap gap-2">
          <nuxt-link
            class="py-1 px-5 border rounded-full bg-white"
            :to="`${useRoute().fullPath}/${subcategory.subcategory}`"
            v-for="subcategory in filteredCategory.items"
            :key="subcategory.title"
            >{{ subcategory.title }}</nuxt-link
          >
        </ul>
      </nav>

      <nav>
        <ul class="flex flex-wrap gap-1">
          <UiCard
            v-for="item in filteredItems"
            :id="item.id"
            :title="item.title"
            :img="item.img"
            :price="item.price"
            :pharmacy="item.pharmacy"
            :isFav="item.isFav"
            :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
          ></UiCard>
        </ul>
      </nav>
    </section>
  </NuxtLayout>
</template>

<script setup>
// All items store
const allItemsStore = useAllItems();
const { items } = storeToRefs(allItemsStore);

// Filter items by id

const filteredItems = items.value.filter(
  (item) => item.category === useRoute().params.category
);

// Categories store
const categoriesStore = useCategories();
const { categories } = storeToRefs(categoriesStore);
// Find a category by id
const filteredCategory = categories.value.find(
  (item) => `/${item.category}` === useRoute().fullPath
);
</script>
