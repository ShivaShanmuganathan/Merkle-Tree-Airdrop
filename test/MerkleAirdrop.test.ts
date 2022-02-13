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

describe('Merkle Airdrop', () => {
  it('Full Cycle', async () => {
    const [signer, guy] = await ethers.getSigners()

    const token = await new MerkleAirdropToken__factory(signer).deploy()

    const randomAddresses = new Array(15)
      .fill(0)
      .map(() => new Wallet(randomBytes(32).toString('hex')).address)

    const merkleTree = new MerkleTree(
      randomAddresses.concat(signer.address),
      keccak256,
      { hashLeaves: true, sortPairs: true }
    )

    const root = merkleTree.getHexRoot()

    const airdrop = await new MerkleAirdrop__factory(signer).deploy(
      token.address,
      root
    )

    await token.transfer(airdrop.address, parseEther('10'))
    
      
  })
})