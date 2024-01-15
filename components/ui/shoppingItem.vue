<template>
  <li class="border-b">
    <div class="flex justify-between relative p-10">
      <div class="flex gap-10">
        <img :src="image" alt="Medicine image" />
        <div>
          <h1 class="font-bold text-xl">{{ label }}</h1>
          <p class="text-sm">{{ title }}</p>
        </div>
      </div>
      <div class="flex gap-10 items-center">
        <div class="bg-lint py-2 px-5 rounded-lg">
          <p>{{ pharmacy }}</p>
        </div>
        <div class="text-center">
          <h2 class="font-bold text-lg">{{ price }} TMT</h2>
          <div class="bg-lint px-2 rounded">
            <button
              @click="allItemsStore.decreasePrice(id)"
              class="outline-none"
            >
              <i class="pi pi-minus"></i>
            </button>
            <input
              type="text"
              inputmode="numeric"
              v-model="count"
              class="bg-lint text-center outline-none"
            />
            <button
              @click="allItemsStore.increasePrice(id)"
              class="outline-none"
            >
              <i class="pi pi-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <i
        class="pi pi-trash absolute right-3 top-3"
        @click="allItemsStore.deleteFromShoppingCart(id)"
      ></i>
    </div>
  </li>
</template>
<script setup>
const props = defineProps({
  image: String,
  label: String,
  title: String,
  pharmacy: String,
  price: Number,
  id: Number,
  count: Number,
});
const { image, label, title, pharmacy, price, id, count } = toRefs(props);

const allItemsStore = useAllItems();
</script>
