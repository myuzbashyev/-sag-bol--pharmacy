<template>
 <nuxt-layout>
  <section>
   <div class="container py-16">
    <h1 class="mb-5 text-2xl font-bold">Sebedim</h1>
    <div
     v-if="shoppingCart.length <= 0"
     class="bg-white w-full h-96 flex justify-center items-center gap-5 shadow rounded"
    >
     <i class="pi pi-shopping-cart text-9xl"></i>
     <h1 class="text-3xl">Sebediňiz boş</h1>
    </div>
    <shoppingItems else :shItems="shoppingCart"></shoppingItems>
   </div>
  </section>
 </nuxt-layout>
</template>

<script lang="ts" setup>
const shoppingCart = useShoppingCart();
</script>
