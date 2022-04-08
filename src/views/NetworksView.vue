<template>
  <div class="validator-section">
    <v-row>
      <v-col>
        <h2 class="text-h2">Choose the tastiest stake</h2>
      </v-col>
    </v-row>
    <v-row>
      <Validator v-for="node in nodes" :key="node.address" :node="node" />
    </v-row>
  </div>
</template>

<script>
import Validator from "@/components/Validator.vue";

export default {
  name: "HomeView",
  components: { Validator },
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
<style scoped>
.validator-section {
  padding-top: 1em;
  color: black;
  margin-bottom: 5em;
}

.validator-headline {
  font-size: 1.5em;
  text-align: left;
  text-align: center;
}
</style>
