<template>
  <div>
    <div>NETWORK is {{ network }}</div>
    <v-btn color="primary" @click="connect">Connect Keplr</v-btn>
  </div>
</template>

<script>
import SigningClient from "../utils/SigningClient";
export default {
  name: "NetworkView",
  components: {},
  data() {
    return {
      network: "",
    };
  },
  methods: {
    connect: async function () {
      const chainId = "akashnet-2";

      await window.keplr.enable(chainId);
      const offlineSigner = await window.getOfflineSignerAuto(chainId);
      const key = await window.keplr.getKey(chainId);
      const signingClient = await SigningClient(
        "https://rpc.cosmos.directory/akash",
        chainId,
        "0.0025uakt",
        offlineSigner,
        key
      );
      console.log(signingClient);
    },
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
