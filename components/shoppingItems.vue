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
  ></UiShoppingItem>
</template>

<script>
export default {
  props: ["shItems"],
};
</script>
