<template>
  <nav
    class="fixed bg-white h-screen text-forest-green w-72 top-0 left-0 -translate-x-80 p-5 z-50 transition-transform duration-300 ease-in-out"
  >
    <ul class="flex flex-col">
      <nuxt-link
        @click="isSidebarVisible = false"
        to="/"
        class="flex gap-2 items-center border-b border-emerald-green mb-5"
      >
        <svg
          height="50px"
          width="50px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.001 512.001"
          xml:space="preserve"
        >
          <g>
            <path
              style="fill: #507c5c"
              d="M252.293,432.283c-26.896,0-52.118-10.41-71.02-29.311L29.369,251.069
		c-39.159-39.16-39.159-102.879,0-142.04c18.902-18.902,44.124-29.313,71.02-29.313s52.118,10.41,71.02,29.313l24.37,24.37
		c5.135,5.135,5.136,13.461,0,18.596s-13.461,5.136-18.596,0l-24.371-24.37c-13.934-13.936-32.553-21.61-52.424-21.61
		s-38.49,7.674-52.423,21.608c-28.906,28.906-28.906,75.94,0,104.848l151.903,151.903c13.936,13.936,32.553,21.61,52.424,21.61
		s38.488-7.674,52.423-21.608c28.906-28.906,28.906-75.94,0-104.847c-5.135-5.135-5.135-13.461,0-18.597
		c5.136-5.135,13.46-5.135,18.597,0c18.901,18.902,29.311,44.124,29.311,71.02c0,26.896-10.41,52.118-29.311,71.02
		C304.411,421.873,279.189,432.283,252.293,432.283z"
            />
            <path
              style="fill: #507c5c"
              d="M189.359,315.175c-3.365,0-6.731-1.283-9.298-3.851c-5.135-5.135-5.135-13.461,0-18.597
		l33.009-33.009c5.135-5.135,13.461-5.135,18.597,0c5.135,5.135,5.135,13.461,0,18.597l-33.009,33.009
		C196.089,313.892,192.724,315.175,189.359,315.175z"
            />
            <path
              style="fill: #507c5c"
              d="M130.316,256.133c-3.365,0-6.73-1.283-9.298-3.851c-5.135-5.135-5.136-13.461,0-18.596
		l33.008-33.009c5.135-5.135,13.461-5.136,18.596,0c5.135,5.136,5.136,13.461,0,18.596l-33.008,33.009
		C137.047,254.848,133.681,256.133,130.316,256.133z"
            />
            <path
              style="fill: #507c5c"
              d="M259.766,432.341c-25.72,0-51.44-9.79-71.02-29.369c-39.16-39.16-39.16-102.879,0-142.04
		L340.649,109.03c39.16-39.159,102.879-39.16,142.041,0c18.901,18.902,29.311,44.124,29.311,71.02s-10.41,52.118-29.311,71.02
		l-24.37,24.37c-5.136,5.136-13.46,5.136-18.597,0c-5.135-5.135-5.135-13.461,0-18.596l24.37-24.37
		c28.906-28.906,28.906-75.94,0-104.847c-28.905-28.906-75.942-28.904-104.847,0L207.342,279.528
		c-28.906,28.906-28.906,75.94,0,104.847c28.905,28.905,75.94,28.908,104.847,0c5.136-5.136,13.46-5.136,18.597,0
		c5.135,5.135,5.135,13.461,0,18.596C311.205,422.552,285.486,432.341,259.766,432.341z"
            />
          </g>
          <path
            style="fill: #cff09e"
            d="M275.466,192.81l-77.421,77.421c-33.946,33.946-33.946,89.496,0,123.442l0,0
	c33.946,33.946,89.496,33.946,123.442,0l77.422-77.421L275.466,192.81z"
          />
          <g>
            <path
              style="fill: #507c5c"
              d="M259.766,432.283c-26.896,0-52.118-10.41-71.02-29.311c-39.16-39.16-39.16-102.879,0-142.04
		l77.421-77.422c5.136-5.135,13.46-5.135,18.597,0l123.444,123.442c2.466,2.466,3.851,5.811,3.851,9.298
		c0,3.487-1.386,6.832-3.851,9.298l-77.422,77.421C311.884,421.873,286.662,432.283,259.766,432.283z M275.466,211.405
		l-68.123,68.124c-28.906,28.906-28.906,75.94,0,104.847c13.934,13.934,32.553,21.608,52.424,21.608
		c19.87,0,38.49-7.674,52.423-21.608l68.124-68.124L275.466,211.405z"
            />
            <path
              style="fill: #507c5c"
              d="M322.699,315.175c-3.366,0-6.73-1.283-9.298-3.851l-33.008-33.009
		c-5.135-5.135-5.135-13.461,0-18.596c5.139-5.134,13.462-5.135,18.597,0l33.008,33.009c5.135,5.135,5.135,13.461,0,18.596
		C329.43,313.892,326.064,315.175,322.699,315.175z"
            />
            <path
              style="fill: #507c5c"
              d="M381.744,256.133c-3.366,0-6.73-1.283-9.298-3.851l-33.009-33.009
		c-5.135-5.135-5.135-13.461,0-18.597c5.136-5.135,13.46-5.135,18.597,0l33.009,33.009c5.135,5.135,5.135,13.461,0,18.597
		C388.473,254.85,385.108,256.133,381.744,256.133z"
            />
          </g>
        </svg>
        <span>
          <p class="font-bold">SAG-BOL</p>
          <p class="text-sm">Iň amatly bahadan tap!</p>
        </span>
      </nuxt-link>

      <nuxt-link
        @click="
          {
            isSidebarVisible = false;
            isSignInOpen = true;
          }
        "
        to="/"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-sign-in"></i>
        Içeri gir</nuxt-link
      >
      <nuxt-link
        @click="isSidebarVisible = false"
        to="/aboutMedicine/medicineNews"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-book"></i>
        Lukmançylyk hakda
      </nuxt-link>
      <nuxt-link
        @click="isSidebarVisible = false"
        to="/aboutUs"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-info-circle"></i>
        Biz barada</nuxt-link
      >

      <nuxt-link
        @click="isSidebarVisible = false"
        to="/delivery"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-truck"></i>
        Eltip bermek we tölemek</nuxt-link
      >
      <nuxt-link
        @click="isSidebarVisible = false"
        to="/privacyPolicy"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-lock"></i>
        Ulanyş düzgünleri we gizlinlik ýörelgesi</nuxt-link
      >
      <nuxt-link
        @click="isSidebarVisible = false"
        to="/"
        class="p-3 transition-hover ease-in-out hover:border-l-2 border-emerald-green hover:shadow-sm"
      >
        <i class="pi pi-globe"></i>
        Türkmen</nuxt-link
      >
    </ul>
    <i
      class="pi pi-times-circle absolute top-1 right-1 text-2xl cursor-pointer"
      @click="isSidebarVisible = false"
    ></i>
  </nav>
</template>
<script setup>
const togglersStore = useTogglers();
const { isSidebarVisible, isSignInOpen } = storeToRefs(togglersStore);
</script>
