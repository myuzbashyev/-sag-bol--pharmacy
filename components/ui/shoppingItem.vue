<template>
  <li class="border-b">
    <div
      class="flex justify-between items-start flex-col gap-5 sm:flex-row sm:gap-0 sm:items-center relative p-10"
    >
      <div class="flex gap-2">
        <img :src="image" alt="Medicine image" />
        <div>
          <h1 class="font-bold text-base sx:text-xl">{{ label }}</h1>
          <p class="text-xs sx:text-sm text-ellipsis break-words">
            {{ title }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap justify-center gap-3 items-end">
        <div class="bg-lint rounded-lg text-sm p-1">
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
              class="bg-lint text-center outline-none w-14 xs:w-20"
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
