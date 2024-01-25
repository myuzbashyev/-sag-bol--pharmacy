<template>
  <nuxt-layout>
    <section :class="favItems.length > 10 ? 'h-full' : 'h-screen'">
      <div class="px-3 xl:max-w-7xl max-auto py-10">
        <h1 class="text-2xl font-bold mb-5">
          Halanlarym ({{ favItems.length }})
        </h1>
        <div
          v-if="favItems.length <= 0"
          class="bg-white w-full h-96 flex justify-center items-center gap-5 shadow rounded"
        >
          <i class="pi pi-heart text-9xl"></i>
          <h1 class="text-3xl">Halan dermanlaryňyzyň sanawy boş</h1>
        </div>
        <nav v-else>
          <ul class="flex flex-wrap gap-1">
            <UiCard
              v-for="item in favItems"
              :id="item.id"
              :title="item.title"
              :img="item.img"
              :pharmacy="item.pharmacy"
              :price="item.price"
              :isFav="item.isFav"
              :route="
                `/category/${item.category}/${item.subcategory}/` + item.id
              "
            ></UiCard>
          </ul>
        </nav>
      </div>
    </section>
  </nuxt-layout>
</template>
<script setup>
const allItemsStore = useAllItems();
const { favItems } = storeToRefs(allItemsStore);
</script>
