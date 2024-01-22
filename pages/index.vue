<template>
  <nuxt-layout>
    <div>
      <section class="mt-5">
        <div class="px-3 xl:w-9/12 m-auto">
          <!-- Images -->
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

      <!-- Saglyk we derman -->
      <section class="px-3 xl:w-9/12 m-auto py-16">
        <nuxt-link
          to="/category/medicine"
          class="text-2xl font-bold text-forest-green hover:text-emerald-green"
          >Saglyk we derman &rarr;</nuxt-link
        >
        <nav class="mt-5">
          <ul class="flex flex-wrap gap-2 xs:justify-normal">
            <UiCard
              v-for="item in medicine"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :img="item.img"
              :pharmacy="item.pharmacy"
              :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
              :isFav="item.isFav"
            ></UiCard>
          </ul>
        </nav>
      </section>

      <!-- Lukmancylyk enjamlary -->
      <section class="px-3 xl:w-9/12 m-auto">
        <nuxt-link
          to="/category/doctor"
          class="text-2xl font-bold text-forest-green hover:text-emerald-green"
        >
          Lukmançylyk enjamlary &rarr;</nuxt-link
        >
        <nav class="mt-5">
          <ul class="flex flex-wrap justify-center gap-2 xs:justify-normal">
            <UiCard
              v-for="item in doctor"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :img="item.img"
              :pharmacy="item.pharmacy"
              :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
              :isFav="item.isFav"
            ></UiCard>
          </ul>
        </nav>
      </section>

      <!-- Mayyp adamlar ucin -->
      <section class="px-3 xl:w-9/12 m-auto py-16">
        <nuxt-link
          to="/category/disabilities"
          class="text-2xl font-bold text-forest-green transition-colors ease-in-out hover:text-emerald-green"
          >Maýyp adamlar uçin &rarr;</nuxt-link
        >
        <nav class="mt-5">
          <ul class="flex flex-wrap gap-2">
            <UiCard
              v-for="item in disabilities"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :price="item.price"
              :img="item.img"
              :pharmacy="item.pharmacy"
              :route="`/category/${item.category}/${item.subcategory}/${item.id}`"
              :isFav="item.isFav"
            ></UiCard>
          </ul>
        </nav>
      </section>

      <!-- Sign In -->
    </div>
  </nuxt-layout>
</template>

<script setup>
// All items store
const allItemsStore = useAllItems();
const { medicine, doctor, disabilities } = storeToRefs(allItemsStore);

// Togglers store
const togglersStore = useTogglers();
const { isSignInOpen, signInButton } = storeToRefs(togglersStore);

// Images store
const imagesStore = useImages();
const { images } = storeToRefs(imagesStore);
</script>
