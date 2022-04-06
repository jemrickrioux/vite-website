<template>
  <div class="validator-section">
    <h2>Networks we support</h2>
    <Validator v-for="node in nodes" :key="node.address" :node="node" />
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
