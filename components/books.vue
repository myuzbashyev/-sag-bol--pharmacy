<template>
  <ul class="flex flex-wrap gap-5">
    <UiBookItem
      v-for="bookItem in books"
      :id="bookItem.id"
      :image="bookItem?.volumeInfo.imageLinks?.smallThumbnail"
      :title="bookItem?.volumeInfo?.title"
      :author="bookItem?.volumeInfo?.authors.join(' , ')"
    >
    </UiBookItem>
  </ul>
</template>

<script>
export default {
  props: ["books"],
};
</script>
