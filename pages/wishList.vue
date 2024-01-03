<template>
  <nuxt-layout>
    <section>
      <div class="container py-16">
        <h1 class="mb-5 text-2xl font-bold">Halanlarym</h1>
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
<script lang="ts" setup>
const wishList = useWishList();
</script>
