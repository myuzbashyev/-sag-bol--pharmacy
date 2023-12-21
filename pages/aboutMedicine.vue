import customLink from '~/components/customLink';
<template>
  <nuxt-layout>
    <section class="container py-10">
      <header class="mb-10">
        <nav>
          <ul class="flex justify-center gap-20">
            <customLink to="/aboutMedicine/medicineNews" class="text-2xl"
              >Täzelikler</customLink
            >
            <customLink to="/aboutMedicine/medicineBooks" class="text-2xl"
              >Kitaplar</customLink
            >
            <customLink to="/aboutMedicine/medicineArticles" class="text-2xl"
              >Makalalar</customLink
            >
          </ul>
        </nav>
      </header>
      <nuxt-page></nuxt-page>
    </section>
  </nuxt-layout>
</template>
