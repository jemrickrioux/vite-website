<template>
  <div class="header">
    <v-row>
      <v-col>
        <h1 class="text-h1">Stake your tokens safely</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="text-h2">Fries are on us</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn to="/networks" color="primary">Stake with us</v-btn>
        <v-btn>Learn more</v-btn>
      </v-col>
    </v-row>
  </div>
  <div class="stats">
    <v-row>
      <v-col>
        <h2>Statistiques</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col> 1</v-col>
      <v-col>2</v-col>
      <v-col>3</v-col>
    </v-row>
  </div>
  <div class="why">
    <v-row>
      <v-col>
        <h2>Why choose us?</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col> 1</v-col>
      <v-col>2</v-col>
      <v-col>3</v-col>
    </v-row>
  </div>
  <div class="our-networks">
    <v-row>
      <v-col>
        <h2>Choose the tastiest stake</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">1</v-col>
      <v-col cols="4">2</v-col>
      <v-col cols="4">3</v-col>
      <v-col cols="4">4</v-col>
      <v-col cols="4">5</v-col>
      <v-col cols="4">6</v-col>
    </v-row>
  </div>
  <div class="faq">
    <v-row>
      <v-col>
        <h2>FAQ</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-expansion-panels variant="popout" class="my-4">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          title="Important question"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
  <div class="team">
    <v-row>
      <v-col>
        <h2>About the team</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>INSERT CONTENT HERE </v-col>
    </v-row>
  </div>
  <div>
    <v-row>
      <v-col>
        <h2>Follow us on Twitter</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>Twitter stuff here </v-col>
    </v-row>
  </div>
</template>

<script>
import Validator from "@/components/Validator.vue";
import Header from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: { Validator, Header },
  data() {
    return {
      nodes: [],
    };
  },
  created() {
    this.nodes = this.$store.state.node;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
