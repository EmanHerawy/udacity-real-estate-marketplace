# Blockchain Real Estate Marketplace Dapp 
 A decentralized  Real Estate Marketplace.

---
## Steps to deploy on Ganache and test contracts:
1. clone repo & cd the repo folder
2. install modules: 
    ```
    npm install
    cd eth-contracts/
     ```
3. in second terminal run ganache: 
   ```
   ganache-cli
   ```
4. run all tests:  
   ```
    truffle test
    ```
5. migrate 
   ```
    truffle migrate
    ```




--- 
## Contract on rinkeby:
 ```
 truffle migrate --network rinkeby
    > Compiled successfully using:
   - solc: 0.5.17+commit.d19bba13.Emscripten.clang
  
    Migrations dry-run (simulation)
    ===============================
    > Network name:    'rinkeby-fork'
    > Network id:      4
    > Block gas limit: 0x98a8c8
  
    2_initial_migration.js
    ======================

   Deploying 'SquareVerifier'
   --------------------------
   > transaction hash:    0xed32f0dec9c62a72fea8763f306ed916e555a97879fec4b845a249f1a6dbaa32
   > Blocks: 1            Seconds: 13
   > contract address:    0x0E1FD874763bd4711e6fBEe111981D10F907705C
   > block number:        6415520
   > block timestamp:     1588388232
   > account:             0x5d8c77d2123ACD0490Bf779eac2be02d5B0D322C
   > balance:             2.989280242
   > gas used:            992455
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0198491 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x60184a47ea2139a419a7e746f5e1f4b1a6cd22d95489386a4e8bdd56f54cba21
   > Blocks: 0            Seconds: 5
   > contract address:    0x636572413AcC67118d9703B3E99905aAbB914CB0
   > block number:        6415521
   > block timestamp:     1588388247
   > account:             0x5d8c77d2123ACD0490Bf779eac2be02d5B0D322C
   > balance:             2.913641982
   > gas used:            3781913
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.07563826 ETH



 ```

- token on etherscan: https://rinkeby.etherscan.io/address/0x636572413acc67118d9703b3e99905aabb914cb0

 
1. mint 10 tokens : 
   please check migration or etherscan transaction: https://rinkeby.etherscan.io/address/0x636572413acc67118d9703b3e99905aabb914cb0

2. openSea marketPlace storefront link: https://rinkeby.opensea.io/assets/non-fungible-token



3. view 5 purchased tokens:

please check my activities here 
https://rinkeby.opensea.io/accounts/Eman%20Herawy?tab=activity




node v10.18.1 (npm v6.13.4)
Truffle version: 
```
truffle --version
Truffle v5.1.17 - a development framework for Ethereum
```
Library used: "@truffle/hdwallet-provider"
to deploy the contract on test network using private key