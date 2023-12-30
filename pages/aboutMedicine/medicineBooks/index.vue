<template>
  <section>
    <books :books="booksArray"></books>
  </section>
</template>

<script lang="ts" setup>
const booksArray = await useBooks();
console.log(booksArray);
</script>
