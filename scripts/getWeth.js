const { getNamedAccounts } = require("hardhat");

async function getWeth() {
  const { deployer } = await getNamedAccounts();
  //call the deposit function on the web contract
  //need abi and the contract address --> we can also use the interface instead of abi
}

module.exports = { getWeth };
