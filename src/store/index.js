import { createStore } from "vuex";

import _ from "lodash";

import {
  fetchChains,
  fetchPrices,
  fetchNetworks,
  fetchApy,
  fetchVp,
  setCurrent,
} from "./actions";

export default createStore({
  state: {
    chainLoading: true,
    current: {},
    chains: {},
    networks: {},
    net: {
      akash: {
        name: "akash",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      cerberus: {
        name: "cerberus",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      chihuahua: {
        name: "chihuahua",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      evmos: {
        name: "evmos",
        enabled: false,
        apyEnabled: false,
        status: "active",
        address: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      nomic: {
        name: "nomic",
        enabled: false,
        apyEnabled: false,
        status: "active",
        address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      lumnetwork: {
        name: "lumnetwork",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
      sifchain: {
        name: "sifchain",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        price: 0,
        priceLoading: true,
        networkLoading: true,
        network: {},
        apy: 0,
        apyLoading: true,
        vp: 0,
        vpLoading: true,
      },
    },
    validators: [
      {
        name: "akash",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "akashvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlsqkfuf",
        price: 0,
        priceLoading: true,
      },
      {
        name: "cerberus",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "cerberusvaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdrrnnufr",
        price: 0,
        priceLoading: true,
      },
      {
        name: "chihuahua",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "chihuahuavaloper1zl4vt84hya03e8hu7dx4q4cvn2ts2xdr685p5g",
        price: 0,
        priceLoading: true,
      },
      {
        name: "evmos",
        enabled: false,
        apyEnabled: false,
        status: "active",
        address: "evmosvaloper1pz3mcahcrglf3md4lggax5r95gvmppc6x5w7hw",
        price: 0,
        priceLoading: true,
      },
      {
        name: "nomic",
        enabled: false,
        apyEnabled: false,
        status: "active",
        address: "nomic1jndxttq5ykp5zc8g3xwnxmchzjtl7ap2avlwkz",
        price: 0,
        priceLoading: true,
      },
      {
        name: "lumnetwork",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "lumvaloper1kn7zgwex5yr897mp9vy83vm9re53skyhr82s58",
        price: 0,
        priceLoading: true,
      },
      {
        name: "sifchain",
        enabled: true,
        apyEnabled: true,
        status: "active",
        address: "sifvaloper1uepjmgfuk6rnd0djsglu88w7d0t49lmlmxj56z",
        price: 0,
        priceLoading: true,
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
    getNetworks(state) {
      return state.networks;
    },
    getCurrentNetwork(state) {
      return state.current;
    },
    getChains(state) {
      return state.chains;
    },
    getApyByName: (state) => (name) => {
      return (state.net[name].apy * 100).toFixed(2);
    },
    getVotingPowerByName: (state) => (name) => {
      return state.net[name].vp;
    },
    getPriceByName: (state) => (name) => {
      return state.net[name].price.toFixed(2);
    },
  },
  mutations: {
    setChains(state, chains) {
      state.chains = chains;
    },
    setCurrentChain(state, chain) {
      state.current = chain;
    },
    setPriceByName(state, { price, name }) {
      state.net[name].price = price;
      state.net[name].priceLoading = false;
    },
    setNetworkByName(state, { network, name }) {
      state.net[name].network = network;
      state.net[name].networkLoading = false;
    },
    setNetworks(state, networks) {
      state.networks = networks;
    },
    setVotingPowerByName(state, { name, vp }) {
      state.net[name].vp = vp;
      state.net[name].vpLoading = false;
    },
    setApyByName(state, { name, apy }) {
      state.net[name].apy = apy;
      state.net[name].apyLoading = false;
    },
  },
  actions: {
    setCurrent,
    fetchChains,
    fetchPrices,
    fetchNetworks,
    fetchApy,
    fetchVp,
  },
  modules: {},
});
