<template>
  <nuxt-layout>
    <section class="container py-10">
      <h1
        class="py-5 text-2xl text-forest-green border-b border-forest-green mb-5"
      >
        {{ subcategory }}
      </h1>
      <items :goods="items"></items>
    </section>
  </nuxt-layout>
</template>

<script>
export default {
  data() {
    return {
      allItems: useAll(),
      categories: categories(),
      items: [],
      subcategory: "",
    };
  },
  async mounted() {
    try {
      this.items = this.allItems.filter(
        (item) => item.subcategory === this.$route.params.id
      );

      this.subcategory = this.categories
        .find((item) =>
          item.items.find((item) => item.subcategory === this.$route.params.id)
        )
        .items.find((item) => item.subcategory === this.$route.params.id).title;
        console.log(this.items)
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
