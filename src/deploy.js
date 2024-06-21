import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';
import EscrowWithoutArbiter from './artifacts/contracts/EscrowWithoutArbiter.sol/EscrowWithoutArbiter';

export async function deploy(signer, arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  return factory.deploy(arbiter, beneficiary, { value });
}

export async function deployWithoutArbiter(signer,beneficiary,value,proof){
  const factory = new ethers.ContractFactory(
    EscrowWithoutArbiter.abi,
    EscrowWithoutArbiter.bytecode,
    signer
  );
  return factory.deploy(beneficiary,proof,{value});
}