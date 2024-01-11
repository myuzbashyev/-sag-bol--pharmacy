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
            <button @click="decrease" class="outline-none">
              <i class="pi pi-minus"></i>
            </button>
            <input
              type="text"
              inputmode="numeric"
              v-model="numInput"
              class="bg-lint text-center outline-none"
            />
            <button @click="increase" class="outline-none">
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
});
const { image, label, title, pharmacy, price, id } = toRefs(props);
const numInput = ref(1);
function increase() {
  numInput.value += 1;
  allItemsStore.increasePrice(id.value, numInput.value);
}
function decrease() {
  allItemsStore.decreasePrice(id.value, numInput.value);
  numInput.value >= 2 ? (numInput.value -= 1) : numInput.value;
}

const allItemsStore = useAllItems();
</script>
