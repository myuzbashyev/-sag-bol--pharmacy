<template>
  <ul class="flex gap-5">
    <UiCard
      v-for="good in goods"
      :img="good.img"
      :title="good.title"
      :price="good.price"
      :pharmacy="good.pharmacy"
      :route="`/category/${good.category}/${good.subcategory}/${good.id}`"
    ></UiCard>
  </ul>
</template>

<script>
export default {
  props: ["goods"],
};
</script>
