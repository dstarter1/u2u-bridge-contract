
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
 
 
    
  const MyCallAllow = await hre.ethers.getContractFactory("MyCallAllow");

//   const myCallAllow = await MyCallAllow.deploy();
const myCallAllow = await MyCallAllow.attach("0x88C209424E58c47d7E70Ca58891f0b6a0f239FCe");


//   const U2V_BSC = await hre.ethers.getContractFactory("U2V_BSC");
//   const u2V_BSC = await U2V_BSC.attach("0xDa913Eb96D27446EC151e4B383af1F63cce1A76f");
//   await u2V_BSC.transfer(multiSend.address,"10000000000000000000000000");
//function callAllow(address[] memory token, address[] memory modAdd ,address bridgeLock,bool flag)  external onlyOwner {




  await myCallAllow.callAllow([
//    "0x48cAE8F4D95Bf14869DED3f96b9a2BDeD6DdcE6B",
//     "0xc930c27dd2Fff13C167e500Ba770634E7907F4cA",
//     "0x47331ba111E93F102623e81F472EFc22556C7a45",
//     "0xDbaE01Ca9Ee2e0f8f3b7A5cA7F62C80F09cF399d",
     "0x09b8BaA9570fac09BD78Bf80890bd864Ca2A8b88"
    // "0x0810B0ae4A70aDDc706Fb53e436Ff24BE9B6f576",
    // "0x37A7e4E2E235a7fA60f358BF43102950178b4B50",
    // "0xF7cB6D13D502cfaA2Af8C2482764DbBEaEbB031d",
    // "0xe934c0cF530C1883733edF4f846d8FA937B23cE9",
    // "0xA23bDc5AE777086fd29493575856229F5eDb1AE1"
],
                                [
                                "0xd1064458583fCBe08DdcA3d36d157E3F2324e2a4",
                                "0x0e17107231bAe8bEF5449E85B4123bfC07d655E3",
                                "0x393183C37c26dd4e09F716E04D2Ba8D2b2BEbf02",
                                "0x7a9827a094FC5217F78c44c098E1F6c6E4Ef9Ea6",
                                "0x159a25bF9110492F2d9C624C3aBb570c77a13fA9",
                                "0x32741E3137F10457E248A15754d81512e95b4426",
                                "0x692EC21c1C98Bc0ad9614633fAf69bFDC101D765",
                                "0x108F06A5EC7c4E0B5909829735748749718D2B9D",
                                "0x6348E8971D267A1d405A8503c5Fa0e8a4fcF6eB3",
                                "0xD23A8B5096E2486eFeF5AD3c3BBaB8720D9c9f54",
                                "0x4ae5E4f456dD42168bEC409a39954098124aB49D",
                                "0x822Ca7584F27C8F44284225B8bc0EaEF207abE4f",
                                "0xFf05aF93e73aE8De462a4f3E5d8c4A8f0a2F878F",
                                "0x4a457f777BDCAad0bE1A6728c999DA297762Dce0",
                                "0x63Fb75E0eFE942cE9B624c1aA9D3FD2484BbE6a3",
                                "0x810b8a54F22840Db7b06139Ffcde45c05B6FC702",
                                "0x0285A7ce749A691A24ee47638FCe85586FD3c355",
                                "0xF599EB35AeA0A57810e0062f24a3E24c41337246",
                                "0x9A2285A08c399976F12f0f8F76ed781F2Fae7a06",
                                "0x5A272A0C5E9e213682A2638Adf6c1E16E063FB93",
                                "0x7e01F28aCF9Ce8A767238F55B4834C76454c6C54",
                                "0xFa6189b8670d008094c387D383F31b99b049cD68",
                                "0x9b9FC62e09beAA827f05E8deFbd936645De6AC1E",
                                "0xFC3DCa874452189244092Fa8FF466Aa9fBf4AE2a",
                                "0x7137B981502a0104Be8D2c69466fEAC639b53dE9",
                                "0xEcB464fcd67182047c663Ce5De2093Fef6c9c625",
                                "0x681CEE5f3aDdbb3d2240a77BDBb6dD8D61Ce6Ed7",
                                "0x4443D34C5805d63BAc0554Ef2db9cECa61739F2d",
                                "0x4e50e5aD010c19Ec35899Bbb6D755D9aE2156cBd",
                                "0x3F0B124549E5A529F7FF883348bA1C42B08035e5",
                                "0x47Dd0805F516A2ccab3E1444d6e130D798480F8d",
                                "0xB6d58C63659b22c4Cac3136C095cb4eaC5a44fAb",
                                "0xD4a17EE6BbD787DE5e8748AB608454C83DA358BA",
                                "0x258916777904E718cE038d09CcAD33389C6381B1",
                                "0x783aA55A5A10DeF033D6E60e0614958527e37683",
                                "0x04b4A112Be11554508D24C7dE7a27add3B793444",
                                "0xD9D9B009F6EB62F8d9dC7f5041A5AB55a696dcc5",
                                "0xcD78837C3931c0722BF3938F1A0a36df8E6b93Ee",
                                "0x3573b4D06536a613E406cfaED97638155fF97866",
                                "0xF16cEC2cc34879194C446B34c52FbD8e0A6178f9"
                            ],
                                "0xbD98E8Ada1e8d08076f9e1dc7Af357663E59f3e3",
                                true);

 // await multiSend.multiSend("0xDa913Eb96D27446EC151e4B383af1F63cce1A76f","0x8B2a3680bE39fe20BAD7a423Dc1632Ca2262D60d",["0xaEEe119FCE2c692e5a6289688d918fCb60b0833A","0x9F37243260fAB4422f659d55f2c86c76AA90b5AC","0xDD47C31519Db8808A1D0855Ac5915a07ba342720"],"100000000000000000");

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
