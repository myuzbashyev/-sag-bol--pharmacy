<template>
  <ul class="flex gap-1">
    <UiCard
      v-for="item in goods.slice(0, 4)"
      :id="item.id"
      :img="item.img"
      :title="item.title"
      :price="item.price"
      :pharmacy="item.pharmacy"
      :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
      :is-fav="item.isFav"
      @add-to-wish-list="addToWishList(item)"
      @add-to-shopping-cart="addToShoppingCart(item)"
    ></UiCard>
  </ul>
</template>

<script setup>
const props = defineProps({
  goods: Array,
});
const { goods } = toRefs(props);
</script>
