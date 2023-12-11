<template>
  <NuxtLayout>
    <section class="container py-10">
      <h1 class="text-2xl font-bold text-forest-green">
        {{ category.label }}
      </h1>
      <nav class="py-5 border-b border-forest-green mb-5">
        <ul>
          <nuxt-link
            class="py-1 px-5 border mr-5 rounded-full bg-white"
            :to="`${this.$route.fullPath}/${subitem.subcategory}`"
            v-for="subitem in category.items"
            :key="subitem.title"
            >{{ subitem.title }}</nuxt-link
          >
        </ul>
      </nav>

      <items :goods="items" class="flex-wrap"></items>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      categories: categories(),
      allItems: useAll(),
      items: [],
      category: "",
    };
  },

  async mounted() {
    try {
      this.items = this.allItems.filter(
        (item) => item.category === this.$route.params.category
      );
      this.category = this.categories.find(
        (item) => `/${item.category}` === this.$route.fullPath
      );
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
