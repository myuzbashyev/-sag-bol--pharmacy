<template>
  <div
    class="bg-white text-forest-green shadow-md p-10 rounded-xl absolute left-1/2 top-96 -translate-x-1/2 -translate-y-1/2 z-50 opacity-0 invisible transition-opacity duration-300 ease-in-out"
  >
    <h1 class="text-center text-xl mb-2">Hoş geldiňiz</h1>
    <p class="text-center text-lg mb-5" v-if="isRegistered">Agza Bol</p>
    <p class="text-center text-lg mb-5" v-else>Içeri gir</p>
    <form action="sign up" class="w-80">
      <label for="phone_number" class="block text-sm">Telefon</label>
      <input
        type="integer"
        class="border w-full p-4 rounded-lg mb-5 outline-none transition-colors ease-in-out hover:border-forest-green"
      />
      <label for="password" class="block text-sm">Açar söz</label>
      <input
        type="password"
        class="border w-full p-4 rounded-lg mb-5 outline-none transition-colors ease-in-out hover:border-forest-green"
      />
      <label for="password-submit" class="block text-sm" v-if="isRegistered"
        >Açar sözi tassykla</label
      >
      <input
        v-if="isRegistered"
        type="integer"
        class="border w-full p-4 rounded-lg mb-5 outline-none transition-colors ease-in-out hover:border-forest-green"
      />
      <article v-if="isRegistered">
        <p class="text-center mb-5 text-sm">
          Agza bolduňyzmy? Onda
          <span
            class="text-emerald-green font-bold cursor-pointer"
            @click="openSignInMenu"
            >Içeri gir</span
          >
        </p>
      </article>
      <article v-else>
        <p class="text-sm mb-5 text-forest-green">
          Entak agza bolmadyňyzmy? Onda
          <span
            class="text-emerald-green font-bold cursor-pointer"
            @click="openRegisterMenu"
            >Agza bol</span
          >
        </p>
      </article>
      <Button
        v-if="isRegistered"
        icon="pi pi-user-plus"
        label="Agza bol"
        class="w-full bg-lint text-forest-green !border-none mb-5 hover:bg-lint-1"
      ></Button>
      <Button
        v-else
        icon="pi pi-sign-in"
        label="Içeri gir"
        class="w-full bg-lint text-forest-green !border-none mb-5 hover:bg-lint-1"
      ></Button>
      <article v-if="!isRegistered">
        <p class="text-sm text-center">
          Açar sözi unutdyňyzmy?
          <span class="text-emerald-green font-bold">Çalyşmak</span>
        </p>
      </article>
    </form>
    <i
      class="pi pi-times-circle absolute top-1 right-1 text-2xl cursor-pointer"
      @click="closeSignInMenu"
    ></i>
  </div>
</template>

<script>
export default {
  emits: ["closeMenu"],
  data() {
    return {
      isRegistered: false,
    };
  },
  methods: {
    closeSignInMenu() {
      this.$emit("closeMenu");
    },
    openRegisterMenu() {
      this.isRegistered = true;
    },
    openSignInMenu() {
      this.isRegistered = false;
    },
  },
};
</script>
