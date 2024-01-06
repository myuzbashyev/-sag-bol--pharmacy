<template>
  <nuxt-layout>
    <section class="h-screen">
      <div class="container py-10">
        <div class="flex justify-between mb-5">
          <h1 class="text-2xl font-bold">
            Sebedim ({{ shoppingCart.length }})
          </h1>
          <Button
            icon="pi pi-trash"
            label="Sebedi boşat"
            class="bg-lint text-forest-green"
          ></Button>
        </div>
        <div
          v-if="shoppingCart.length <= 0"
          class="bg-white w-full h-96 flex justify-center items-center gap-5 shadow rounded"
        >
          <i class="pi pi-shopping-cart text-9xl"></i>
          <h1 class="text-3xl">Sebediňiz boş</h1>
        </div>
        <div v-else class="flex justify-between gap-5">
          <div class="bg-white flex-1 h-full">
            <ShoppingItems></ShoppingItems>
          </div>
          <div>
            <nav class="bg-white w-64 h-52 p-2 shadow rounded">
              <ul class="text-lg">
                <li class="py-1 border-b">Sebedim:</li>
                <li class="py-1">
                  Bahasy:
                  <span class="font-bold">{{ 1 }} TMT</span>
                </li>
                <li class="py-1 border-b">
                  Eltip berme: <span class="font-bold">15 TMT</span>
                </li>
                <li class="py-1">
                  Jemi:
                  <span class="font-bold">{{ 1 + 15 }} TMT</span>
                </li>
              </ul>
            </nav>
            <button class="bg-lint w-full py-2 rounded-lg mt-5">
              Sargydy taýýarlamak
            </button>
          </div>
        </div>
      </div>
    </section>
  </nuxt-layout>
</template>

<script>
export default {
  data() {
    return {
      shoppingCart: useAllShoppingCart().shoppingCart,
    };
  },
};
</script>
