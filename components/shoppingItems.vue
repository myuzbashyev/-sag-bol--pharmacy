<template>
  <UiShoppingItem
    class="list-none"
    v-for="shItem in shoppingCart"
    :key="shItem?.id"
    :image="shItem?.img"
    :title="shItem?.title"
    :label="shItem?.label"
    :price="shItem?.price"
    :pharmacy="shItem?.pharmacy"
    @delete-item="deleteItem(shItem.id)"
    @increase-number="increaseNumber($event, shItem.price, shItem.id)"
    @decrease-number="decreaseNumber($event, shItem.price, shItem.id)"
  ></UiShoppingItem>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: useShoppingCart(),
      item: "",
    };
  },
  methods: {
    deleteItem(id) {
      this.shoppingCart = this.shoppingCart.filter((item) => item.id !== id);
    },
    increaseNumber(event, price, id) {
      this.shoppingCart.find((item) => item.id === id).price = price * event;
    },
    decreaseNumber(event, price, id) {
      this.shoppingCart.find((item) => item.id === id).price = price * event;
    },
  },
};
</script>
