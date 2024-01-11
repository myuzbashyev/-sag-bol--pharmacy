<template>
  <nuxt-link
    :to="`${useRoute().fullPath}/${link}`"
    class="border bg-white shadow w-80 rounded-lg"
  >
    <img :src="image" alt="News image" class="rounded-t-lg" />
    <div class="p-5">
      <h1 class="mb-3 font-bold">{{ title }}</h1>
      <p>{{ description }}</p>
      <span class="text-xs">{{ publishedAt }}</span>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  link: String,
  image: String,
  title: String,
  description: String,
  publishedAt: String,
});
const { link, image, title, description, publishedAt } = toRefs(props);
</script>
