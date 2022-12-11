async function main() {
  //aave protocol treats everything as erc20
  //eth by itself isnt an erc20 token --> therefore it is swaped for weth which is an erc20 token
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
