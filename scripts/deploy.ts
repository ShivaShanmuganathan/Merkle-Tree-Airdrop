import { expect } from 'chai'
import { randomBytes } from 'crypto'
import { Wallet } from 'ethers'
import { parseEther } from 'ethers/lib/utils'
import { ethers } from 'hardhat'
import keccak256 from 'keccak256'
import { MerkleTree } from 'merkletreejs'

import {
  MerkleAirdrop__factory,
  MerkleAirdropToken__factory
} from '../typechain-types'

async function main() {

    const [signer] = await ethers.getSigners()

    const token = await new MerkleAirdropToken__factory(signer).deploy()
       
    // Add Addresses to be whitelisted in the below array
    const whitelistedAddresses = ['0x645bE56bf2B43295dF59307F2e2259c52C88ECE8', '0xAdf2228d5Bb78F8257D2480af7bfF70D0cb9E6a0', '0x9757D0877c545edec89513D2C9EF16a94C208B24'];

    // console.log("whitelistedAddresses", whitelistedAddresses);
    
    const merkleTree = new MerkleTree(
      whitelistedAddresses,
      keccak256,
      { hashLeaves: true, sortPairs: true }
    )

    const root = merkleTree.getHexRoot()

    const airdrop = await new MerkleAirdrop__factory(signer).deploy(
      token.address,
      root
    )

    await token.transfer(airdrop.address, parseEther('10'))
    console.log("Deployment Compelete")
    
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });


