const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract (update this with the actual contract address after deployment)
  const contractAddress = process.env.CONTRACT_ADDR;

  const spaceNFT = await ethers.getContractFactory("Space", signer);
  const contract = await spaceNFT.attach(contractAddress);

  await contract.mintNFT(5);
  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
