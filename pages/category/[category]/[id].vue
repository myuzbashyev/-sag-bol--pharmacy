<template>
  <nuxt-layout>
    <section class="container h-screen">
      <h1
        class="py-5 text-2xl text-forest-green border-b border-forest-green mb-5"
      >
        {{ filteredSubCategory.title }}
      </h1>
      <nav>
        <ul class="flex gap-1">
          <UiCard
            v-for="item in filteredItems"
            :id="item.id"
            :title="item.title"
            :img="item.img"
            :price="item.price"
            :pharmacy="item.pharmacy"
            :isFav="item.isFav"
            :route="`${useRoute().fullPath}/` + item.id"
          ></UiCard>
        </ul>
      </nav>
    </section>
  </nuxt-layout>
</template>

<script setup>
const allItemsStore = useAllItems();
const { items } = storeToRefs(allItemsStore);
const filteredItems = items.value.filter(
  (item) => item.subcategory === useRoute().params.id
);

const categoriesStore = useCategories();
const { categories } = storeToRefs(categoriesStore);

const filteredSubCategory = categories.value
  .find((item) =>
    item.items.find((item) => item.subcategory === useRoute().params.id)
  )
  .items.find((item) => item.subcategory === useRoute().params.id);
</script>
