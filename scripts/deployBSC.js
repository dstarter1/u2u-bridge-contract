// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const U2V_U2U = await hre.ethers.getContractFactory("U2V_U2U");
  // const u2V_U2U = await U2V_U2U.deploy();
  // await u2V_U2U.deployed();

  // console.log("U2V_U2U deployed to:", u2V_U2U.address);


  // const U2V_BSC = await hre.ethers.getContractFactory("U2V_BSC");
  // const u2V_BSC = await U2V_BSC.attach("0xeac639f6336e263dde3ed571e00d1c128634ebb0");

  // await u2V_BSC.deployed();

  // console.log("U2V_BSC deployed to:", u2V_BSC.address);



  // await u2V_BSC.approve("0xf382cf0138d47523f2e7bd6d7b0afd4277697a29","2000000000000000000000000000000000")

  
  // const U2UBridgeLock = await hre.ethers.getContractFactory("U2UBridgeLock");
  // const u2UBridgeLock = await U2UBridgeLock.deploy();

  // await u2UBridgeLock.deployed();

  // console.log("u2UBridgeLock deployed to:", u2UBridgeLock.address);

  
  // const U2UBridgeMint = await hre.ethers.getContractFactory("U2UBridgeMint");
  // const u2UBridgeMint = await U2UBridgeMint.deploy();

  // await u2UBridgeMint.deployed();

  // console.log("u2UBridgeMint deployed to:", u2UBridgeMint.address);

    const U2V_U2U = await hre.ethers.getContractFactory("U2NFT");
  const u2V_U2U = await U2V_U2U.deploy("U2NFT-VENUS","U2N-VEN");
  await u2V_U2U.deployed();
  console.log("VENUS: "+u2V_U2U.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
