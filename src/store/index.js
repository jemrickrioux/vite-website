import { createStore } from "vuex";

import CosmosDirectory from "../utils/CosmosDirectory";
import Network from "../utils/Network";
import _ from "lodash";
import axios from "axios";
export default createStore({
  state: {
    current: "akash",
    chains: {},
    networks: {},
    prices: {},
    apys: {},
    validators: [
      {
        name: "akash",
        enabled: true,
        apyEnabled: true,
        address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
      },
      {
        name: "cerberus",
        enabled: true,
        apyEnabled: true,
        address: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
      },
      {
        name: "chihuahua",
        enabled: true,
        apyEnabled: true,
        address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
      },
      {
        name: "evmos",
        enabled: false,
        apyEnabled: false,
        address: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
      },
      {
        name: "nomic",
        enabled: false,
        apyEnabled: false,
        address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
      },
      {
        name: "lumnetwork",
        enabled: true,
        apyEnabled: true,
        address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
      },
      {
        name: "sifchain",
        enabled: true,
        apyEnabled: true,
        address: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
      },
    ],
    node: [
      {
        name: "akash",
        status: "active",
        link: "https://ping.pub/akash-network/staking/akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        coingecko_id: "akash-network",
        rpc: "https://rpc.cosmos.directory/akash",
        decimals: 6,
      },
      {
        name: "cerberus",
        status: "active",
        link: "https://www.mintscan.io/cerberus/validators/cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        address: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        coingecko_id: "cerberus-2",
        rpc: "https://rpc.cosmos.directory/cerberus",
        decimals: 6,
      },
      {
        name: "chihuahua",
        status: "active",
        link: "https://ping.pub/chihuahua/staking/chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        coingecko_id: "chihuahua-token",
        rpc: "https://rpc.cosmos.directory/chihuahua",
        decimals: 6,
      },
      {
        name: "evmos",
        status: "active",
        link: "https://www.mintscan.io/evmos/validators/evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        address: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        coingecko_id: "evmos",
        rpc: "https://tendermint.bd.evmos.org:26657",
        decimals: 18,
      },
      {
        name: "nomic",
        status: "active",
        link: "https://nomic.zenscan.io/validator.php?addr=nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        coingecko_id: "nomic",
        rpc: "http://138.197.71.46:26657",
        decimals: 6,
      },
      {
        name: "lumnetwork",
        status: "active",
        link: "https://ping.pub/lum-network/staking/lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        coingecko_id: "lum-network",
        rpc: "https://rpc.cosmos.directory/lumnetwork",
        decimals: 6,
      },
      {
        name: "sifchain",
        status: "active",
        link: "https://www.mintscan.io/sifchain/validators/sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        address: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        coingecko_id: "sifchain",
        rpc: "https://rpc.cosmos.directory/sifchain",
        decimals: 18,
      },
    ],
  },
  getters: {
    networks(state) {
      return state.validators;
    },
    getChains(state) {
      return state.chains;
    },
    getApyByName: (state) => (name) => {
      if (state.apys[name]) {
        return (state.apys[name].apy * 100).toFixed(2);
      } else {
        return 0;
      }
    },
    getPriceByName: (state) => (name) => {
      if (state.prices[name]) {
        return state.prices[name].price.toFixed(2);
      } else {
        return 0;
      }
    },
  },
  mutations: {
    setChains(state, chains) {
      state.chains = chains;
    },
    setPrices(state, prices) {
      state.prices = prices;
    },
    setNetworks(state, networks) {
      state.networks = networks;
    },
    setApys(state, apys) {
      state.apys = apys;
    },
  },
  actions: {
    async fetchChains({ commit, state }) {
      const directory = CosmosDirectory();
      let chains = await directory.getChains();
      const networks = state.validators
        .filter((el) => el.enabled !== false)
        .map((data) => {
          const registryData = chains[data.name] || {};
          return { ...registryData, ...data };
        });
      commit(
        "setChains",
        _.compact(networks).reduce((a, v) => ({ ...a, [v.name]: v }), {})
      );
    },
    async fetchPrices({ commit, state, dispatch }) {
      await dispatch("fetchChains");
      let chainsArray = Object.values(state.chains);
      let chainsPrices = await Promise.all(
        chainsArray.map(async (chain) => {
          let price = await axios.get(
            "https://api.coingecko.com/api/v3/simple/price",
            {
              params: {
                ids: chain.coingecko_id,
                vs_currencies: "usd",
              },
            }
          );
          return {
            name: chain.name,
            price: price.data[chain.coingecko_id].usd,
          };
        })
      );

      commit("setPrices", _.keyBy(chainsPrices, "name"));
    },
    async fetchNetworks({ commit, state, dispatch }) {
      await dispatch("fetchChains");
      let chainsArray = Object.values(state.chains);
      let chainsNetworks = await Promise.all(
        chainsArray.map(async (chain) => {
          return await Network(chain);
        })
      );
      console.log(chainsNetworks);
      commit("setNetworks", _.keyBy(chainsNetworks, "name"));
    },
    async fetchApy({ commit, state, dispatch }) {
      await dispatch("fetchNetworks");
      let networks = Object.values(state.networks);
      let apys = await Promise.all(
        networks.map(async (network) => {
          let apy = await network.getApy();
          return {
            apy,
            name: network.name,
          };
        })
      );
      console.log(apys);
      commit("setApys", _.keyBy(apys, "name"));
    },
  },
  modules: {},
});
