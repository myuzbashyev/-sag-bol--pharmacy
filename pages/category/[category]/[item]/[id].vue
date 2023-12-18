<template>
  <nuxt-layout>
    <section class="container py-10 text-forest-green">
      <div
        class="flex justify-around items-center bg-white rounded-lg p-5 border shadow"
      >
        <div class="p-32 border rounded-lg flex h-1/2">
          <img :src="item.img" alt="Image of medicine" />
        </div>
        <div class="w-1/2">
          <nav class="mb-5">
            <ul>
              <li class="p-1">
                <span class="font-bold">Ady : </span>
                <span>{{ item.title }}</span>
              </li>
              <li class="p-1 mb-5">
                <span class="font-bold"> Kategoriýasy : </span>
                <span>{{ item.label }}</span>
              </li>
              <ul v-if="item.characteristics">
                <li class="p-1">
                  <span class="font-bold"> Harakteristika: </span>
                </li>
                <li class="p-1">
                  <span class="font-bold"> Düzüjisi: </span>
                  <span>{{ item?.characteristics?.substance }}</span>
                </li>

                <li class="p-1">
                  <span class="font-bold"> Çykarylan ýurdy: </span>

                  <span>{{ item?.characteristics?.country }}</span>
                </li>
                <li class="p-1">
                  <span class="font-bold"> Çykaran kompaniýasy: </span>

                  <span>{{ item?.characteristics?.manufacturer }}</span>
                </li>
                <li class="p-1">
                  <span class="font-bold"> Lukmanyň görkezmesi boýunça: </span>

                  <span>
                    {{ item?.characteristics?.prescription }}
                  </span>
                </li>
                <li class="p-1">
                  <span class="font-bold"> Derman serişdäniň formasy: </span>
                  <span>{{ item?.characteristics?.form }}</span>
                </li>
              </ul>
            </ul>
          </nav>
          <article>
            <h1 class="font-bold">Instruksiýa:</h1>
            {{ item.instructions }}
          </article>
        </div>
      </div>
    </section>
  </nuxt-layout>
</template>

<script>
export default {
  data() {
    return {
      allItem: useAll(),
      item: {},
    };
  },
  async mounted() {
    this.item = await this.allItem.find(
      (item) => item.id === +this.$route.params.id
    );
    console.log(this.item);
  },
};
</script>
