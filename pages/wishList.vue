<template>
  <nuxt-layout>
    <section>
      <div class="container py-16">
        <div class="flex justify-between mb-5">
          <h1 class="text-2xl font-bold">Halanlarym ({{ wishList.length }})</h1>
          <Button
            icon="pi pi-heart"
            label="Sanawy boşat"
            @click="deleteArray"
            class="bg-lint text-forest-green"
          ></Button>
        </div>
        <div
          v-if="wishList.length <= 0"
          class="bg-white w-full h-96 flex justify-center items-center gap-5 shadow rounded"
        >
          <i class="pi pi-heart text-9xl"></i>
          <h1 class="text-3xl">Halan dermanlaryňyzyň sanawy boş</h1>
        </div>
        <items v-else :goods="wishList"></items>
      </div>
    </section>
  </nuxt-layout>
</template>
<script>
export default {
  data() {
    return {
      wishList: useAllWishList().wishList,
    };
  },
};
</script>
