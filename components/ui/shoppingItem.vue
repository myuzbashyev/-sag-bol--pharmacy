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
          <input
            type="number"
            v-model="inputNumber"
            @mouseup="increaseNumber(inputNumber)"
            @mousedown="
              decreaseNumber(inputNumber === 1 ? inputNumber : inputNumber - 1)
            "
            min="1"
            class="text-center bg-lint rounded outline-none"
          />
        </div>
      </div>
      <i class="pi pi-trash absolute right-3 top-3" @click="deleteItem"></i>
    </div>
  </li>
</template>
<script>
export default {
  emits: ["deleteItem", "increaseNumber", "decreaseNumber"],
  props: ["image", "title", "label", "price", "pharmacy"],
  data() {
    return {
      inputNumber: 1,
    };
  },

  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
    increaseNumber(incNumber) {
      this.$emit("increaseNumber", incNumber);
    },
    decreaseNumber(decNumber) {
      this.$emit("decreaseNumber", decNumber);
    },
  },
};
</script>
