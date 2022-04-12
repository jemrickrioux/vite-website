import _ from "lodash";
import axios from "axios";
import CosmosDirectory from "../utils/CosmosDirectory";
import Network from "../utils/Network";

export const setCurrent = async ({ commit }, current) => {
  commit("setCurrentChain", current);
};

export const fetchChains = async ({ commit, state }) => {
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
};

export const fetchPrices = async ({ commit, state, dispatch }) => {
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
      commit("setPriceByName", {
        price: price.data[chain.coingecko_id].usd,
        name: chain.name,
      });
      return {
        name: chain.name,
        price: price.data[chain.coingecko_id].usd,
      };
    })
  );
};

export const fetchNetworks = async ({ commit, state, dispatch }) => {
  await dispatch("fetchChains");

  let chainsArray = Object.values(state.chains);
  let chainsNetworks = await Promise.all(
    chainsArray.map(async (chain) => {
      let network = await Network(chain);
      commit("setNetworkByName", network);
      return network;
    })
  );
  console.log(chainsNetworks);
  commit("setNetworks", _.keyBy(chainsNetworks, "name"));
};
export const fetchApy = async ({ commit, state, dispatch }) => {
  await dispatch("fetchNetworks");
  let networks = Object.values(state.networks);
  let apys = await Promise.all(
    networks.map(async (network) => {
      let apy = await network.getApy();
      commit("setApyByName", { name: network.name, apy });
      return {
        apy,
        name: network.name,
      };
    })
  );
};
export const fetchVp = async ({ commit, state, dispatch }) => {
  let validators = state.validators;
  let vps = await Promise.all(
    validators.map(async (validator) => {
      let network = state.networks[validator.name];
      if (network) {
        let vp = await network.queryClient.getVotingPower(
          validator.address,
          network.decimals
        );
        commit("setVp");
        return {
          vp,
          name: validator.name,
        };
      } else return Promise.resolve({ vp: 0, name: validator.name });
    })
  );
};
