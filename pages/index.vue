<template>
  <nuxt-layout>
    <div
      :class="{
        'blur overflow-hidden': isSignInOpen || isMenuVisible,
      }"
    >
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
      <ScrollTop></ScrollTop>
    </div>
  </nuxt-layout>
</template>

<script setup>
// All items store
const allItemsStore = useAllItems();
const { medicine, doctor, disabilities } = storeToRefs(allItemsStore);

// Togglers store
const togglersStore = useTogglers();
const { isSignInOpen, isMenuVisible } = storeToRefs(togglersStore);

// Images store
const imagesStore = useImages();
const { images } = storeToRefs(imagesStore);
</script>
