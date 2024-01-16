<template>
  <div class="p-3 flex items-center border-b">
    <div class="flex-1 cursor-pointer" @click="navigateToRoute">
      <h1>{{ title }}</h1>
      <div class="flex justify-between items-center mt-2">
        <p class="bg-lint py-2 px-5 rounded-lg">{{ pharmacy }}</p>
      </div>
    </div>
    <div class="flex gap-5 items-center">
      <span class="flex gap-3 items-center">
        <p class="font-bold">{{ price }} TMT</p>
      </span>
      <Button
        v-if="!isAdded"
        @click="addToShoppingCart()"
        label="Sebede goş"
        icon="pi pi-shopping-bag"
        class="bg-lint text-forest-green border-none transition-colors ease-in-out hover:bg-lint-1"
      ></Button>
      <div v-else class="bg-lint px-2 rounded">
        <button @click="decrease" class="outline-none">
          <i class="pi pi-minus"></i>
        </button>
        <input
          type="text"
          inputmode="numeric"
          v-model="numInput"
          class="bg-lint text-center outline-none w-24"
        />
        <button @click="increase" class="outline-none">
          <i class="pi pi-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  pharmacy: String,
  route: String,
});
const { id, title, price, pharmacy, route } = toRefs(props);

const allItemsStore = useAllItems();
const togllersStore = useTogglers();
const { isSearchVisible } = storeToRefs(togllersStore);

const isAdded = ref(false);
function addToShoppingCart() {
  isAdded.value = true;
  allItemsStore.addToShoppingCart(id.value);
}

const numInput = ref(1);
function increase() {
  numInput.value += 1;
  allItemsStore.increasePrice(id.value);
}
function decrease() {
  allItemsStore.decreasePrice(id.value);
  numInput.value >= 2 ? (numInput.value -= 1) : numInput.value;
}

function navigateToRoute() {
  useRouter().push({ path: route.value });
  isSearchVisible.value = false;
}
</script>
