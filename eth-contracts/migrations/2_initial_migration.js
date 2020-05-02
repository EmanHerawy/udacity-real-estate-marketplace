var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');

module.exports = async function(deployer) {
  const name = 'Non Fungible Token';
  const symbol = 'NFT';
  const baseTokenURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/";
 await deployer.deploy(SquareVerifier);
 await deployer.deploy(SolnSquareVerifier,SquareVerifier.address,name,   symbol,   baseTokenURI);
 let i =0;
 const testAccount="0xe092b1fa25DF5786D151246E492Eed3d15EA4dAA"
 const instance = await SolnSquareVerifier.deployed();
 do {
   i++;
 const tx =  await instance.mint(testAccount,i);
 console.log(tx,'mint tx');
 
 } while (i<=10);
};
