import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@okxweb3/hardhat-explorer-verify";

const config: HardhatUserConfig = {
  solidity: "0.7.6",
  networks: {
    xlayer: {
      url: "https://testnet-rpc.plasma.to",
      accounts: ["0xfa841dea21de1e7982f594a295e6e7d965e543b3ce084396722299e2eaa5ff29"],
      chainId: 9746,
    },
  },
  etherscan: {
    apiKey: {
      xlayer: "dummy", // plugin requires this
    },
    customChains: [
      {
        network: "xlayer",
        chainId: 9746,
        urls: {
          apiURL: "https://www.oklink.com/api/v5/explorer/contract/verify-source-code-plugin/xlayer_test",
          browserURL: "https://testnet.plasmascan.to",
        },
      },
    ],
  },
};

export default config;
