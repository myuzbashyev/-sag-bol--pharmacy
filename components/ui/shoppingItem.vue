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
            value="1"
            class="text-center bg-lint rounded outline-none"
          />
        </div>
      </div>
      <i class="pi pi-trash absolute right-3 top-3"></i>
    </div>
  </li>
</template>
<script>
export default {
  props: ["image", "title", "label", "price", "pharmacy"],
};
</script>
