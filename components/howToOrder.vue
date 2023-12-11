<template>
  <section class="bg-white text-forest-green">
    <ul class="flex container py-10 justify-around">
      <li
        v-for="(step, index) in steps"
        :key="step.index"
        class="flex flex-col items-center text-center gap-3 w-96"
        :class="{
          'relative before:absolute before:w-72 before:h-0.5 before:bg-emerald-green before:-left-44 before:top-8 after:absolute after:w-72 after:h-0.5 after:bg-emerald-green after:top-8 after:-right-44':
            index === 1,
        }"
      >
        <div
          class="rounded-full border-emerald-green border p-4 w-min flex items-center"
        >
          <i :class="[step.icon, 'text-3xl']"></i>
        </div>
        <h1>{{ step.title }}</h1>
        <p>{{ step.para }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          icon: "pi pi-search",
          title: "Gerekli dermanyňzy gözläň",
          para: "86-dan gowrak keseli bejermek üçin 889-dan gowrak öňdebaryjy derman tapyp bileris.",
        },
        {
          icon: "pi pi-money-bill",
          title: "Iň amatly bahadan tapyň",
          para: "Gözlän dermanyňyzy iň amatly bahadan tapmak mümkinçiligi diňe bizde bar",
        },
        {
          icon: "pi pi-truck",
          title: "Çalt eltip bermek hyzmatymyzdan lezzet alyň",
          para: "Dermanyňyz tiz wagtda elinizde bolar",
        },
      ],
    };
  },
};
</script>
