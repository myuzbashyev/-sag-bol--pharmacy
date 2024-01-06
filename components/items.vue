<template>
  <ul class="flex gap-5">
    <UiCard
      v-for="item in goods.slice(0, 3)"
      :img="item.img"
      :title="item.title"
      :price="item.price"
      :pharmacy="item.pharmacy"
      :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
      @add-to-wish-list="addToWishList(item)"
      @add-to-shopping-cart="addToShoppingCart(item)"
    ></UiCard>
  </ul>
</template>

<script>
export default {
  props: ["goods"],
  data() {
    return {
      wishList: useAllWishList().wishList,
      shoppingCart: useAllShoppingCart().shoppingCart,
    };
  },
  methods: {
    addToWishList(item) {
      this.wishList.push(item);
    },
    addToShoppingCart(item) {
      this.shoppingCart.push(item);
    },
  },
};
</script>
