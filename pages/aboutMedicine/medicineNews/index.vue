<template>
  <section>
    <news :news="newsWithId"></news>
  </section>
</template>

<script setup>
const { newsWithId } = useNews();
</script>
