<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <Logo />
        <v-app-bar-title class="text"> <h2>Stake Frites</h2></v-app-bar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fredoka&family=Titillium+Web:wght@200;700&display=swap");

body {
  color: white;
  font-family: "Titillium Web", sans-serif;
}
</style>

<script>
import Logo from "@/components/Logo.vue";

import { mapGetters } from "vuex";
export default {
  name: "App",
  async created() {
    await this.$store.dispatch("fetchNetworks");
    await this.$store.dispatch("fetchApy");
    await this.$store.dispatch("fetchPrices");
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["networks", "getApyByName"]),
  },
  components: {
    Logo,
  },
};
</script>
