//import axios from "axios";
//import _ from "lodash";
import {
  setupStakingExtension,
  QueryClient,
  setupBankExtension,
  setupDistributionExtension,
  setupMintExtension,
  setupGovExtension,
} from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";

/**
 * Make Client
 *
 * @returns QueryClient with necessary extensions
 */
const makeClient = async (rpc) => {
  const tmClient = await Tendermint34Client.connect(rpc);
  return QueryClient.withExtensions(
    tmClient,
    setupStakingExtension,
    setupBankExtension,
    setupDistributionExtension,
    setupMintExtension,
    setupGovExtension
  );
};
/* 
function parseCommissionRate(validator) {
  return (
    parseInt(validator.commission.commission_rates.rate) / 1000000000000000000
  );
} */

export default Client = async (rpc) => {
  const client = await makeClient(rpc);
  const getVotingPower = async (address, decimals) => {
    let validator = await client.staking.validator(address);
    return (validator.validator.tokens / 10 ** decimals).toFixed(0);
  };

  return {
    getVotingPower,
  };
};
