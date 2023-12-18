<template>
  <nuxt-layout>
    <div :class="{ 'blur overflow-hidden': body || isSignInMenuOpen }">
      <section class="mt-5">
        <div class="container">
          <Galleria
            :value="images"
            :numVisible="5"
            containerStyle="max-width:100%"
            :circular="true"
            :autoPlay="true"
            :showItemNavigators="true"
            :showThumbnails="false"
            :transitionInterval="5000"
          >
            <template #item="slotProps">
              <img
                :src="slotProps.item.itemImageSrc"
                :alt="slotProps.item.alt"
                style="
                  width: 100%;
                  display: block;
                  height: 500px;
                  border-radius: 10px;
                "
              />
            </template>
          </Galleria>
        </div>
      </section>
      <section class="container py-16">
        <nuxt-link
          to="/category/medicine"
          class="text-2xl font-bold text-forest-green hover:text-emerald-green"
          >Saglyk we derman &rarr;</nuxt-link
        >
        <items class="mt-5 flex-wrap" :goods="medicine" />
      </section>

      <section class="container">
        <nuxt-link
          to="/category/doctor"
          class="text-2xl font-bold text-forest-green hover:text-emerald-green"
        >
          Lukmançylyk enjamlary &rarr;</nuxt-link
        >
        <items class="mt-5 flex-wrap" :goods="doctor" />
      </section>
      <section class="container py-16">
        <nuxt-link
          to="/category/disabilities"
          class="text-2xl font-bold text-forest-green transition-colors ease-in-out hover:text-emerald-green"
          >Maýyp adamlar uçin &rarr;</nuxt-link
        >
        <items class="mt-5 flex-wrap" :goods="disabilities" />
      </section>

      <!-- <HowToOrder class="mb-20"></HowToOrder> -->
    </div>
  </nuxt-layout>
</template>

<script setup lang="ts">
const allItems = useAll();
const medicine: any = allItems.value.filter(
  (items) => items.category === "medicine"
);
const doctor: any = allItems.value.filter(
  (items) => items.category === "doctor"
);
const disabilities: any = allItems.value.filter(
  (items) => items.category === "disabilities"
);
const body = useIsMenuVisible();
const isSignInMenuOpen = useIsSignInMenuVisible();
const images = useImages();
</script>
