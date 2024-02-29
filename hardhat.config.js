require("@nomicfoundation/hardhat-toolbox");
// require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mainnet: {
      url: "https://polygon-bor-rpc.publicnode.com",
      accounts: ["0xded878119aa87e3ff759e0ad01eb7ac55ad274695f32a3387308f04294437900"],
    },
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      // accounts: [""],
      gasPrice: 10000000000,
    },
    arb: {
      url: "https://arb1.arbitrum.io/rpc",
    },
    mumbai: {
      url: "https://polygon-mumbai-pokt.nodies.app",
      accounts: ["0x31deca36c64ecea41c304022bf864d4ff10edfb78f01edfa13713264e718664c"],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: "",
      goerli: "",
      arbitrumOne: "",
      bscTestnet: "",
      bsc:"",
      polygonMumbai: "4WVX9YHEFGR3WY196D512KSW91KZ698HJ2"
    },
  },
};
