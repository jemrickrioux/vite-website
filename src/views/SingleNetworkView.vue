<template>
  <v-row align="center" justify="center">
    <v-col lg="4" md="4">
      <v-card width="400">
        <v-card-title class="white--text mt-8">
          <v-avatar size="56">
            <img
              alt="user"
              class="avatar-logo"
              :src="getCurrentNetwork.image"
            />
          </v-avatar>
          <p class="ml-3 text-h4">{{ network }} holdings</p>
        </v-card-title>

        <v-card-text>
          <div class="font-weight-bold">Balances</div>
        </v-card-text>
        <v-card-text>
          <p>
            <span>Liquid: </span>
            <Coin :denom="denom" :decimals="decimals" :amount="balance" />
          </p>
          <p>
            <span>Staked: </span>
            <Coin :denom="denom" :decimals="decimals" :amount="staked" />
          </p>
          <p>
            <span>Rewards: </span>
            <Coin :denom="denom" :decimals="decimals" :amount="rewards" />
          </p>
        </v-card-text>

        <v-card-actions v-if="getCurrentNetwork.chainId && !keplr"
          ><v-btn color="primary" @click="connect"
            >Connect Keplr</v-btn
          ></v-card-actions
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SigningClient from "../utils/SigningClient";
import Coin from "@/components/Coin.vue";
export default {
  name: "SingleNetworkView",
  components: { Coin },
  data() {
    return {
      network: "",
      balance: 0,
      staked: 0,
      rewards: 0,
      keplr: false,
      denom: "",
      decimals: 0,
      messages: [{ from: "moi", time: "12h00", message: "allo" }],
    };
  },
  computed: {
    ...mapGetters(["getNetworks", "getCurrentNetwork"]),
  },
  methods: {
    ...mapActions(["setCurrent"]),
    connect: async function () {
      const { chainId, denom, rpcUrl, queryClient } = this.getCurrentNetwork;
      this.denom = denom;
      await window.keplr.enable(chainId);
      const offlineSigner = await window.getOfflineSignerAuto(chainId);
      if (offlineSigner) {
        this.keplr = true;
      }
      const key = await window.keplr.getKey(chainId);
      const signingClient = await SigningClient(
        rpcUrl,
        chainId,
        "0.0025" + denom,
        offlineSigner,
        key
      );
      let liquid = await queryClient.tmClient.bank.balance(
        key.bech32Address,
        denom
      );
      let staked = await queryClient.tmClient.staking.delegatorDelegations(
        key.bech32Address
      );
      let rewards =
        await queryClient.tmClient.distribution.delegationTotalRewards(
          key.bech32Address
        );
      console.log(staked, rewards, liquid);
      this.staked = staked.delegationResponses[0].balance.amount;
      this.rewards = rewards.total[0].amount / Math.pow(10, 18);
      this.balance = liquid.amount;
    },
  },
  async created() {
    this.network = this.$route.params.network;
    await this.$store.dispatch("fetchNetworks");
    let current = this.getNetworks[this.network];
    this.setCurrent(current);
    this.$watch(
      () => this.$route.params,
      async (toParams) => {
        this.network = toParams.network;
        await this.$store.dispatch("fetchNetworks");
        let current = this.getNetworks[this.network];
        this.setCurrent(current);
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

.avatar-logo {
  width: 75px;
  height: 75px;
}

.validator-headline {
  font-size: 1.5em;
  text-align: left;
  text-align: center;
  color: white;
}
</style>
