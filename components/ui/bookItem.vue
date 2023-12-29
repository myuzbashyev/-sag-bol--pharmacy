<template>
  <nuxt-link
    :to="`${useRoute().fullPath}/${id}`"
    class="bg-white rounded-lg p-5 w-72 flex flex-col justify-between"
  >
    <img :src="image" alt="Book title image" class="mb-2" />
    <div>
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
