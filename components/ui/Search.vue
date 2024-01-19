<template>
  <div class="p-3 border-b">
    <div class="flex justify-center gap-2 items-center">
      <div class="flex-1" @click="navigateToRoute">
        <h1 class="text-sm xl:text-base">{{ title }}</h1>
        <p
          class="bg-lint text-sm xl:text-base py-2 px-5 mt-2 rounded-lg inline-block"
        >
          {{ pharmacy }}
        </p>
      </div>
      <div class="block text-center 2xl:flex items-center gap-5">
        <p class="font-bold mb-2 2xl:m-0">{{ price }} TMT</p>
        <div v-if="isAdded" class="bg-lint px-2 rounded">
          <button @click="decrease" class="outline-none">
            <i class="pi pi-minus"></i>
          </button>
          <input
            type="text"
            inputmode="numeric"
            v-model="numInput"
            class="bg-lint text-sm xl:text-base text-center outline-none w-28"
          />
          <button @click="increase" class="outline-none">
            <i class="pi pi-plus"></i>
          </button>
        </div>
        <button
          ref="shoppingButton"
          v-else
          @click="addToShoppingCart()"
          class="bg-lint py-2 px-5 rounded-lg text-sm xl:text-base text-forest-green border-none transition-colors ease-in-out hover:bg-lint-1"
        >
          Sebede goş
          <i class="pi pi-shopping-bag"></i>
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
const { isSearchVisible, shoppingButton } = storeToRefs(togllersStore);

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
