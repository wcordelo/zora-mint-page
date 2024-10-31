/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ZoraFeeManagerTestInterface extends utils.Interface {
  functions: {
    "DEFAULT_FUNDS_RECIPIENT_ADDRESS()": FunctionFragment;
    "DEFAULT_OWNER_ADDRESS()": FunctionFragment;
    "DEFAULT_ZORA_DAO_ADDRESS()": FunctionFragment;
    "IS_SCRIPT()": FunctionFragment;
    "IS_TEST()": FunctionFragment;
    "creator()": FunctionFragment;
    "dropImpl()": FunctionFragment;
    "dropMetadataRenderer()": FunctionFragment;
    "editionMetadataRenderer()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "test_CreateDrop()": FunctionFragment;
    "test_CreateEdition()": FunctionFragment;
    "test_CreateGenericDrop()": FunctionFragment;
    "vm()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DEFAULT_FUNDS_RECIPIENT_ADDRESS"
      | "DEFAULT_OWNER_ADDRESS"
      | "DEFAULT_ZORA_DAO_ADDRESS"
      | "IS_SCRIPT"
      | "IS_TEST"
      | "creator"
      | "dropImpl"
      | "dropMetadataRenderer"
      | "editionMetadataRenderer"
      | "failed"
      | "setUp"
      | "test_CreateDrop"
      | "test_CreateEdition"
      | "test_CreateGenericDrop"
      | "vm"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_FUNDS_RECIPIENT_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_OWNER_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ZORA_DAO_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "IS_SCRIPT", values?: undefined): string;
  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "creator", values?: undefined): string;
  encodeFunctionData(functionFragment: "dropImpl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dropMetadataRenderer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "editionMetadataRenderer",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "test_CreateDrop",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_CreateEdition",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_CreateGenericDrop",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vm", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_FUNDS_RECIPIENT_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_OWNER_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ZORA_DAO_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "IS_SCRIPT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "creator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dropImpl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dropMetadataRenderer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "editionMetadataRenderer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_CreateDrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_CreateEdition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_CreateGenericDrop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vm", data: BytesLike): Result;

  events: {
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_array(uint256[])": EventFragment;
    "log_array(int256[])": EventFragment;
    "log_array(address[])": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_array(string,uint256[])": EventFragment;
    "log_named_array(string,int256[])": EventFragment;
    "log_named_array(string,address[])": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(uint256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(int256[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_array(address[])"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,uint256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,int256[])"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "log_named_array(string,address[])"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_array_uint256_array_EventObject {
  val: BigNumber[];
}
export type log_array_uint256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_uint256_array_EventObject
>;

export type log_array_uint256_array_EventFilter =
  TypedEventFilter<log_array_uint256_array_Event>;

export interface log_array_int256_array_EventObject {
  val: BigNumber[];
}
export type log_array_int256_array_Event = TypedEvent<
  [BigNumber[]],
  log_array_int256_array_EventObject
>;

export type log_array_int256_array_EventFilter =
  TypedEventFilter<log_array_int256_array_Event>;

export interface log_array_address_array_EventObject {
  val: string[];
}
export type log_array_address_array_Event = TypedEvent<
  [string[]],
  log_array_address_array_EventObject
>;

export type log_array_address_array_EventFilter =
  TypedEventFilter<log_array_address_array_Event>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_array_string_uint256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_uint256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_uint256_array_EventObject
>;

export type log_named_array_string_uint256_array_EventFilter =
  TypedEventFilter<log_named_array_string_uint256_array_Event>;

export interface log_named_array_string_int256_array_EventObject {
  key: string;
  val: BigNumber[];
}
export type log_named_array_string_int256_array_Event = TypedEvent<
  [string, BigNumber[]],
  log_named_array_string_int256_array_EventObject
>;

export type log_named_array_string_int256_array_EventFilter =
  TypedEventFilter<log_named_array_string_int256_array_Event>;

export interface log_named_array_string_address_array_EventObject {
  key: string;
  val: string[];
}
export type log_named_array_string_address_array_Event = TypedEvent<
  [string, string[]],
  log_named_array_string_address_array_EventObject
>;

export type log_named_array_string_address_array_EventFilter =
  TypedEventFilter<log_named_array_string_address_array_Event>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface ZoraFeeManagerTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZoraFeeManagerTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DEFAULT_FUNDS_RECIPIENT_ADDRESS(
      overrides?: CallOverrides
    ): Promise<[string]>;

    DEFAULT_OWNER_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    DEFAULT_ZORA_DAO_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<[boolean]>;

    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    creator(overrides?: CallOverrides): Promise<[string]>;

    dropImpl(overrides?: CallOverrides): Promise<[string]>;

    dropMetadataRenderer(overrides?: CallOverrides): Promise<[string]>;

    editionMetadataRenderer(overrides?: CallOverrides): Promise<[string]>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_CreateDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_CreateEdition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_CreateGenericDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vm(overrides?: CallOverrides): Promise<[string]>;
  };

  DEFAULT_FUNDS_RECIPIENT_ADDRESS(overrides?: CallOverrides): Promise<string>;

  DEFAULT_OWNER_ADDRESS(overrides?: CallOverrides): Promise<string>;

  DEFAULT_ZORA_DAO_ADDRESS(overrides?: CallOverrides): Promise<string>;

  IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  creator(overrides?: CallOverrides): Promise<string>;

  dropImpl(overrides?: CallOverrides): Promise<string>;

  dropMetadataRenderer(overrides?: CallOverrides): Promise<string>;

  editionMetadataRenderer(overrides?: CallOverrides): Promise<string>;

  failed(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_CreateDrop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_CreateEdition(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_CreateGenericDrop(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vm(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    DEFAULT_FUNDS_RECIPIENT_ADDRESS(overrides?: CallOverrides): Promise<string>;

    DEFAULT_OWNER_ADDRESS(overrides?: CallOverrides): Promise<string>;

    DEFAULT_ZORA_DAO_ADDRESS(overrides?: CallOverrides): Promise<string>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<boolean>;

    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    creator(overrides?: CallOverrides): Promise<string>;

    dropImpl(overrides?: CallOverrides): Promise<string>;

    dropMetadataRenderer(overrides?: CallOverrides): Promise<string>;

    editionMetadataRenderer(overrides?: CallOverrides): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    test_CreateDrop(overrides?: CallOverrides): Promise<void>;

    test_CreateEdition(overrides?: CallOverrides): Promise<void>;

    test_CreateGenericDrop(overrides?: CallOverrides): Promise<void>;

    vm(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_array(uint256[])"(val?: null): log_array_uint256_array_EventFilter;
    "log_array(int256[])"(val?: null): log_array_int256_array_EventFilter;
    "log_array(address[])"(val?: null): log_array_address_array_EventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_array(string,uint256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_uint256_array_EventFilter;
    "log_named_array(string,int256[])"(
      key?: null,
      val?: null
    ): log_named_array_string_int256_array_EventFilter;
    "log_named_array(string,address[])"(
      key?: null,
      val?: null
    ): log_named_array_string_address_array_EventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    DEFAULT_FUNDS_RECIPIENT_ADDRESS(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    DEFAULT_OWNER_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    DEFAULT_ZORA_DAO_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<BigNumber>;

    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    creator(overrides?: CallOverrides): Promise<BigNumber>;

    dropImpl(overrides?: CallOverrides): Promise<BigNumber>;

    dropMetadataRenderer(overrides?: CallOverrides): Promise<BigNumber>;

    editionMetadataRenderer(overrides?: CallOverrides): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_CreateDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_CreateEdition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_CreateGenericDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vm(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_FUNDS_RECIPIENT_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_OWNER_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DEFAULT_ZORA_DAO_ADDRESS(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IS_SCRIPT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dropImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dropMetadataRenderer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    editionMetadataRenderer(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_CreateDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_CreateEdition(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_CreateGenericDrop(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vm(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
