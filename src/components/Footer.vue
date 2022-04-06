<template>
  <v-footer :padless="padless">
    <v-card flat tile width="100%" class="red lighten-1 text-center">
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Stake Frites</strong>
      </v-card-text>
      <v-card-text>
        <Akash />
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Akash from "@/components/Akash.vue";
export default {
  data: () => ({
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
    padless: false,
    variant: "default",
  }),
  components: {
    Akash,
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
