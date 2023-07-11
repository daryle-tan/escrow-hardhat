import { ethers } from "ethers"
import Escrow from "./artifacts/contracts/Escrow.sol/Escrow"
require("dotenv").config()

export default async function deploy(signer, arbiter, beneficiary, value) {
  const url = process.env.ALCHEMY_RPC_URL
  const provider = new ethers.providers.JsonRpcProvider(url)
  let privateKey = process.env.PRIVATE_KEY
  let wallet = new ethers.Wallet(privateKey, provider)

  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer,
    // wallet,
  )
  return factory.deploy(arbiter, beneficiary, { value })
}
