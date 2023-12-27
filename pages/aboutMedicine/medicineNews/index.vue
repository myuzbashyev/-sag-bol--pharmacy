<template>
  <section>
    <news :news="readyNews"></news>
  </section>
</template>

<script setup>
const readyNews = await useNews();
</script>
