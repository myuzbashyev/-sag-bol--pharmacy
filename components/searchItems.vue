<template>
  <ul>
    <UiSearch
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :pharmacy="item.pharmacy"
    ></UiSearch>
  </ul>
</template>

<script>
export default {
  props: ["items"],
};
</script>
