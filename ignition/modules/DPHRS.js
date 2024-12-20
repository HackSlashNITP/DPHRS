const hre = require("hardhat");

async function main() {
  
  const dphrs = await hre.ethers.deployContract("DPHRS");

  // await dphrs.waitForDeployment();

  console.log(dphrs.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });