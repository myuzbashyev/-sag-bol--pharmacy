<template>
 <UiShoppingItem
  class="list-none"
  v-for="shItem in shoppingCart"
  :key="shItem?.id"
  :id="shItem?.id"
  :image="shItem?.img"
  :title="shItem?.title"
  :label="shItem?.label"
  :price="shItem?.price"
  :pharmacy="shItem?.pharmacy"
 ></UiShoppingItem>
</template>

<script>
export default {
 setup() {
  const shoppingCartStore = useShoppingCart();
  const { shoppingCart } = storeToRefs(shoppingCartStore);
  return { shoppingCart };
 },
};
</script>
