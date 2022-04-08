<template>
  <v-col cols="12" lg="6" xl="3">
    <v-card class="pa-5">
      <router-link :to="`/networks/${node.name}`">
        <div class="d-flex card-body">
          <div>
            <v-card-title class="text-h4">{{ node.name }}</v-card-title>
            <v-card-text>
              <p>APR: {{ getApyByName(node.name) }} %</p>
              <p>USD$ {{ getPriceByName(node.name) }}</p>
              <p class="val-vp">
                Voting Power: {{ getVotingPowerByName(node.name) }}
              </p>
            </v-card-text>
          </div>
          <v-card-text class="status">
            <v-chip :class="node.status" label size="x-large"
              ><p>{{ node.status }}</p>
            </v-chip></v-card-text
          >
        </div>
      </router-link>
      <v-card-actions>
        <v-btn :to="`/networks/${node.name}`" target="__blank__"
          >Stake with us</v-btn
        >
        <v-btn v-if="node.link != ''" :href="node.link" target="__blank__"
          >View on the explorer</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ValidatorComponent",
  components: {},
  data() {
    return {
      price: (0.0).toFixed(4),
      vp: 0,
      networks: {},
    };
  },
  computed: {
    ...mapGetters([
      "getApyByName",
      "getPriceByName",
      "getNetworks",
      "getVotingPowerByName",
    ]),
  },
  methods: {},
  props: {
    node: {
      type: Object,
      default: () => {
        return {
          name: "",
          status: "",
          link: "",
          address: "",
          coingecko_id: "",
        };
      },
    },
  },
};
</script>

<style scoped>
.card-body {
  justify-content: space-between;
}
.status {
  align-items: center;
  font-size: 2em;
  display: flex;
}
.active {
  color: #2edf69;
  display: flex;
  justify-self: end;
}
.unbounded {
  color: #bc2edf;
  display: flex;
  justify-self: end;
}
.inactive {
  color: #d11a32;
  display: flex;
  justify-self: end;
}
a {
  color: inherit;
  text-decoration: none;
}
h3 {
  font-size: 2em;
}

.node-link {
  font-size: 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
