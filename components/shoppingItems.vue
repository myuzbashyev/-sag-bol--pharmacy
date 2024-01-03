<template>
 <UiShoppingItem
  v-for="shItem in shItems"
  :key="shItem.id"
  :image="shItem.image"
  :title="shItem.title"
  :description="shItem.description"
  :price="shItem.price"
 ></UiShoppingItem>
</template>

<script>
export default {
 props: [shItems],
};
</script>
