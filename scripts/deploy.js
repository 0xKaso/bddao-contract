// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const USDT = await hre.ethers.getContractFactory("USDT");
  const usdt = await USDT.deploy();
  await usdt.deployed();

  const Reward = await hre.ethers.getContractFactory("Reward");
  const reward = await Reward.deploy("0xc2132D05D31c914a87C6611C10748AEb04B58e8F");
  await reward.deployed();

  const pBRP = await reward.pBRP()

  console.table({
    reward: reward.address,
    pBRP: pBRP.address
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
