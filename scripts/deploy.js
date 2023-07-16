const contractName = "Escrow"
require("dotenv").config()

async function main() {
  const Escrow = await hre.ethers.getContractFactory(contractName)
  const escrow = await Escrow.deploy(
    process.env.ARBITER,
    process.env.BENEFICIARY,
  )
  console.log(`${contractName} deployed to address: ${escrow.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
