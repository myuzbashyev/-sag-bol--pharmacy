<template>
  <div class="p-3 border-b">
    <h1>{{ title }}</h1>
    <div class="flex justify-between items-center mt-2">
      <p class="bg-lint py-2 px-5 rounded-lg">{{ pharmacy }}</p>
      <span class="flex gap-3 items-center">
        <p class="font-bold">{{ price }} TMT</p>
        <Button
          label="Sebede goş"
          icon="pi pi-shopping-bag"
          class="bg-lint text-forest-green border-none transition-colors ease-in-out hover:bg-lint-1"
        ></Button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "price", "pharmacy"],
};
</script>
