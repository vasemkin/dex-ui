/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface DEXInterface extends ethers.utils.Interface {
  functions: {
    "deposit(uint256,address,address)": FunctionFragment;
    "estimateDeposit(uint256,address,address)": FunctionFragment;
    "estimateTokenAmount(uint256,address,address)": FunctionFragment;
    "estimateWithdraw(uint256,address,address)": FunctionFragment;
    "getLiquidity(address)": FunctionFragment;
    "initialize(uint256)": FunctionFragment;
    "liquidity(address)": FunctionFragment;
    "lockedLiquidity()": FunctionFragment;
    "price(uint256,uint256,uint256)": FunctionFragment;
    "swap(uint256,address,address)": FunctionFragment;
    "withdraw(uint256,address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateDeposit",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateTokenAmount",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateWithdraw",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "liquidity", values: [string]): string;
  encodeFunctionData(
    functionFragment: "lockedLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "estimateDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class DEX extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: DEXInterface;

  functions: {
    deposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    estimateDeposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    estimateTokenAmount(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    estimateWithdraw(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidity(_lp: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidity(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    lockedLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    price(
      _inputAmount: BigNumberish,
      _fromReserve: BigNumberish,
      _toReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swap(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _liquidityAmount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    _amount: BigNumberish,
    _baseToken: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  estimateDeposit(
    _amount: BigNumberish,
    _baseToken: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  estimateTokenAmount(
    _tokenAmount: BigNumberish,
    _fromToken: string,
    _toToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  estimateWithdraw(
    _amount: BigNumberish,
    _baseToken: string,
    _token: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getLiquidity(_lp: string, overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _tokenAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  lockedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  price(
    _inputAmount: BigNumberish,
    _fromReserve: BigNumberish,
    _toReserve: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    _tokenAmount: BigNumberish,
    _fromToken: string,
    _toToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _liquidityAmount: BigNumberish,
    _baseToken: string,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateDeposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    estimateTokenAmount(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateWithdraw(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getLiquidity(_lp: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    price(
      _inputAmount: BigNumberish,
      _fromReserve: BigNumberish,
      _toReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _liquidityAmount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    deposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    estimateDeposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateTokenAmount(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    estimateWithdraw(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidity(_lp: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidity(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    price(
      _inputAmount: BigNumberish,
      _fromReserve: BigNumberish,
      _toReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _liquidityAmount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    estimateDeposit(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateTokenAmount(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    estimateWithdraw(
      _amount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidity(
      _lp: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _tokenAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidity(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockedLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price(
      _inputAmount: BigNumberish,
      _fromReserve: BigNumberish,
      _toReserve: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      _tokenAmount: BigNumberish,
      _fromToken: string,
      _toToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _liquidityAmount: BigNumberish,
      _baseToken: string,
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
