# Merkle Tree ERC-20 Airdrop

Using Merkle tree to airdrop ERC-20 tokens in a cheap, elegant and efficient way.

## Whitelisting

Using a Merkle Tree within an NFT (ERC-721) or Tokens (ERC20) context would be useful in situations where some amount of tokens have been reserved for a select group of participants

## Contract Implementation
A relatively simple and straightforward approach to show how using Merkle Trees for whitelist claiming in an ERC-20 project so that only designated addresses of your whitelist are able to claim. 

## Clone This Repo & Run This Project
```shell
git clone https://github.com/ShivaShanmuganathan/Merkle-Tree-Airdrop.git
cd Merkle-Tree-Airdrop
npm install
npx hardhat compile
npx hardhat test
```

## To Deploy The Contract
1. Deploy Locally
2. 
```shell
hardhat run scripts/deploy.ts
```

2. Deploy on a network 

```shell
hardhat run --network ropsten scripts/deploy.ts
```


# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
