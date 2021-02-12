/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ChainlinkOracle } from "../ChainlinkOracle";

export class ChainlinkOracle__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ChainlinkOracle> {
    return super.deploy(overrides || {}) as Promise<ChainlinkOracle>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ChainlinkOracle {
    return super.attach(address) as ChainlinkOracle;
  }
  connect(signer: Signer): ChainlinkOracle__factory {
    return super.connect(signer) as ChainlinkOracle__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkOracle {
    return new Contract(address, _abi, signerOrProvider) as ChainlinkOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "multiply",
        type: "address",
      },
      {
        internalType: "address",
        name: "divide",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "_get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "multiply",
        type: "address",
      },
      {
        internalType: "address",
        name: "divide",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "getDataParameter",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "peek",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610640806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063d6d7d52511610050578063d6d7d52514610221578063eeb8a8d314610221578063fdc28b08146102ac57610072565b8063c699c4d614610077578063d0720d631461015c578063d568866c146101b1575b600080fd5b6100e76004803603602081101561008d57600080fd5b8101906020810181356401000000008111156100a857600080fd5b8201836020820111156100ba57600080fd5b803590602001918460018302840111640100000000831117156100dc57600080fd5b5090925090506102ef565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610121578181015183820152602001610109565b50505050905090810190601f16801561014e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019f6004803603606081101561017257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561032a565b60408051918252519081900360200190f35b6100e7600480360360208110156101c757600080fd5b8101906020810181356401000000008111156101e257600080fd5b8201836020820111156101f457600080fd5b8035906020019184600183028401116401000000008311171561021657600080fd5b5090925090506104a7565b6102916004803603602081101561023757600080fd5b81019060208101813564010000000081111561025257600080fd5b82018360208201111561026457600080fd5b8035906020019184600183028401116401000000008311171561028657600080fd5b5090925090506104e0565b60408051921515835260208301919091528051918290030190f35b6100e7600480360360608110156102c257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020810135909116906040013561053d565b60408051808201909152600481527f4c494e4b0000000000000000000000000000000000000000000000000000000060208201525b92915050565b6000670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff8516156103dc5760008573ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561039957600080fd5b505afa1580156103ad573d6000803e3d6000fd5b505050506040513d60a08110156103c357600080fd5b506020015190506103d48282610584565b9150506103f1565b6103ee81670de0b6b3a7640000610584565b90505b73ffffffffffffffffffffffffffffffffffffffff8416156104945760008473ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561045557600080fd5b505afa158015610469573d6000803e3d6000fd5b505050506040513d60a081101561047f57600080fd5b5060200151905080828161048f57fe5b049150505b82818161049d57fe5b0495945050505050565b505060408051808201909152600981527f436861696e6c696e6b0000000000000000000000000000000000000000000000602082015290565b6000806000806000868660608110156104f857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811694506020820135169250604001359050600161052f84848461032a565b945094505050509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff9485166020820152929093168284015260608083019190915282518083039091018152608090910190915290565b600081158061059f5750508082028282828161059c57fe5b04145b61032457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f426f72696e674d6174683a204d756c204f766572666c6f770000000000000000604482015290519081900360640190fdfea264697066735822122055dd8b9ee6697a485d72edfed5a9f0cbc9e1639f39b5c7cbd51c39acb7d52c2764736f6c634300060c0033";