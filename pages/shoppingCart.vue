<template>
  <nuxt-layout>
    <section :class="shoppingCart.length > 5 ? 'h-full' : 'h-screen'">
      <div class="px-3 max-w-7xl mx-auto py-10">
        <div class="flex justify-between flex-col sx:flex-row gap-3 mb-5">
          <h1 class="text-2xl font-bold">Sebedim ({{ itemsCount }})</h1>
          <Button
            @click="allItemsStore.clearShoppingCart"
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
        <div v-else class="flex justify-between flex-col lg:flex-row gap-5">
          <!-- Card -->
          <div class="bg-white flex-1 h-full overflow-y-scroll">
            <nav>
              <ul>
                <ShoppingItem
                  v-for="shoppingItem in shoppingCart"
                  :image="shoppingItem.img"
                  :label="shoppingItem.label"
                  :title="shoppingItem.title"
                  :pharmacy="shoppingItem.pharmacy"
                  :price="shoppingItem.price"
                  :id="shoppingItem.id"
                  :count="shoppingItem.count"
                ></ShoppingItem>
              </ul>
            </nav>
          </div>

          <!-- Prices -->
          <div class="hidden lg:block">
            <nav class="bg-white w-64 h-52 p-2 shadow rounded">
              <ul class="text-lg">
                <li class="py-1 border-b">Sebedim:</li>
                <li class="py-1">
                  Bahasy:
                  <span class="font-bold">{{ sum }} TMT</span>
                </li>
                <li class="py-1 border-b">
                  Eltip berme: <span class="font-bold">15 TMT</span>
                </li>
                <li class="py-1">
                  Jemi:
                  <span class="font-bold">{{ sum + 15 }} TMT</span>
                </li>
              </ul>
            </nav>
            <button class="bg-lint w-full py-2 rounded-lg mt-5">
              Sargydy taýýarlamak
            </button>
          </div>
          <aside class="lg:hidden">
            <aside class="flex">
              <p class="bg-white px-3 flex-1 flex justify-between items-center">
                <span
                  ><i
                    :class="
                      pricesRef
                        ? 'pi pi-chevron-up cursor-pointer'
                        : 'pi pi-chevron-down cursor-pointer'
                    "
                    @click="pricesRef = !pricesRef"
                  ></i>
                  Jemi:</span
                >
                <span class="font-bold">{{ sum + 15 }} TMT</span>
              </p>

              <button class="bg-lint py-2 flex-1">Sargydy taýýarlamak</button>
            </aside>
            <ul
              class="bg-white opacity-0 invisible transition-opacity duration-300 ease-in-out"
              :class="{ 'opacity-100 !visible': pricesRef }"
            >
              <li class="flex justify-between px-3">
                Bahasy: <span class="font-bold">{{ sum }} TMT</span>
              </li>
              <li class="flex justify-between px-3">
                Eltip berme: <span class="font-bold">{{ 15 }} TMT</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  </nuxt-layout>
</template>

<script setup>
import ShoppingItem from "~/components/ui/shoppingItem.vue";

const allItemsStore = useAllItems();
const { shoppingCart, sum, itemsCount } = storeToRefs(allItemsStore);

const pricesRef = ref(false);
</script>
