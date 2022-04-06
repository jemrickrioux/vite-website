<template>
  <div>
    <div>NETWORK is {{ network }}</div>
    <button v-on:click="connect">ALLO</button>
  </div>
</template>

<script>
export default {
  name: "NetworkView",
  components: {},
  data() {
    return {
      network: "",
    };
  },
  methods() {
    return {
      connect() {
        console.log("ALLO");
        window.keplr.enable("chihuahua-1");
      },
    };
  },
  created() {
    this.network = this.$route.params.network;
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        this.network = toParams.network;
      }
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.validator-section {
  padding-top: 1em;
  color: white;
  margin-bottom: 5em;
}

.validator-headline {
  font-size: 1.5em;
  text-align: left;
  text-align: center;
  color: white;
}
</style>
