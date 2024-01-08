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
 setup() {
  // stores
  const wishListStore = useWishList();
  const shoppingCartStore = useShoppingCart();
  const { shoppingCart } = storeToRefs(shoppingCartStore);
  const { wishList } = storeToRefs(wishListStore);
  return { shoppingCart, wishList };
 },
};
</script>
