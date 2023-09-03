
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
//   const MultiSend = await hre.ethers.getContractFactory("MultiSend");
//   const multiSend = await MultiSend.deploy();
//   await multiSend.deployed();

//   console.log("multiSend deployed to:", multiSend.address);

//   await multiSend.approve("0x377410dC86840d66f73a32256D85B2D6901F517c","0x2fB898e6d197a54941D6266b2756d6867A629B38","10000000000000000000000000")
  
 
//   const U2V_BSC = await hre.ethers.getContractFactory("U2V_BSC");
//   const u2V_BSC = await U2V_BSC.attach("0x377410dC86840d66f73a32256D85B2D6901F517c");
//   await u2V_BSC.transfer(multiSend.address,"10000000000000000000000000");


  
  // const U2UBridgeMint = await hre.ethers.getContractFactory("U2UBridgeMint");
  // const u2UBridgeMint = await U2UBridgeMint.deploy();

  // await u2UBridgeMint.deployed();

  // console.log("u2UBridgeMint deployed to:", u2UBridgeMint.address);
  
  const MultiSend = await hre.ethers.getContractFactory("MultiSend");
  const multiSend = await MultiSend.attach("0x7d17dF5Cb1413e0C853f7d30DC8e55e60c62f934");
  await multiSend.multiSend("0x377410dC86840d66f73a32256D85B2D6901F517c","0x2fB898e6d197a54941D6266b2756d6867A629B38",["0xaEEe119FCE2c692e5a6289688d918fCb60b0833A","0x9F37243260fAB4422f659d55f2c86c76AA90b5AC","0xDD47C31519Db8808A1D0855Ac5915a07ba342720"],"100000000000000000");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
