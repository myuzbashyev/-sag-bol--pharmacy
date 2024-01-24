<template>
  <nuxt-link
    :to="`${useRoute().fullPath}/${id}`"
    class="bg-white rounded-lg w-72 flex flex-col justify-between"
  >
    <img
      v-if="image !== undefined"
      :src="image"
      alt="Book title image"
      class="mb-2 h-52 rounded-t-lg"
    />
    <div class="p-5">
      <h1 class="font-bold mb-2">{{ title }}</h1>
      <p class="text-sm">{{ author }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["id", "image", "title", "author"],
};
</script>
