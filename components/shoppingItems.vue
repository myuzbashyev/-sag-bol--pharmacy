<template>
 <UiShoppingItem
  class="list-none"
  v-for="shItem in shItems"
  :key="shItem?.id"
  :image="shItem?.img"
  :title="shItem?.title"
  :label="shItem?.label"
  :price="shItem?.price"
  :pharmacy="shItem?.pharmacy"
  @delete-item="deleteItem(shItem.id)"
 ></UiShoppingItem>
</template>

<script>
export default {
 emits: ["deleteItem"],
 props: ["shItems"],
 methods: {
  deleteItem(id) {
   this.$emit("deleteItem", id);
  },
 },
};
</script>
