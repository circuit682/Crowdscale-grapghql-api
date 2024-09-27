import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  UpdatedTokenInformation,
  Upgrade,
  UpgradeAgentSet,
  MintingAgentChanged,
  Minted,
  Transfer,
  Approval
} from "../generated/CrowdsaleToken/CrowdsaleToken"

export function createUpdatedTokenInformationEvent(
  newName: string,
  newSymbol: string
): UpdatedTokenInformation {
  let updatedTokenInformationEvent = changetype<UpdatedTokenInformation>(
    newMockEvent()
  )

  updatedTokenInformationEvent.parameters = new Array()

  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam("newName", ethereum.Value.fromString(newName))
  )
  updatedTokenInformationEvent.parameters.push(
    new ethereum.EventParam("newSymbol", ethereum.Value.fromString(newSymbol))
  )

  return updatedTokenInformationEvent
}

export function createUpgradeEvent(
  _from: Address,
  _to: Address,
  _value: BigInt
): Upgrade {
  let upgradeEvent = changetype<Upgrade>(newMockEvent())

  upgradeEvent.parameters = new Array()

  upgradeEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  upgradeEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  upgradeEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return upgradeEvent
}

export function createUpgradeAgentSetEvent(agent: Address): UpgradeAgentSet {
  let upgradeAgentSetEvent = changetype<UpgradeAgentSet>(newMockEvent())

  upgradeAgentSetEvent.parameters = new Array()

  upgradeAgentSetEvent.parameters.push(
    new ethereum.EventParam("agent", ethereum.Value.fromAddress(agent))
  )

  return upgradeAgentSetEvent
}

export function createMintingAgentChangedEvent(
  addr: Address,
  state: boolean
): MintingAgentChanged {
  let mintingAgentChangedEvent = changetype<MintingAgentChanged>(newMockEvent())

  mintingAgentChangedEvent.parameters = new Array()

  mintingAgentChangedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  mintingAgentChangedEvent.parameters.push(
    new ethereum.EventParam("state", ethereum.Value.fromBoolean(state))
  )

  return mintingAgentChangedEvent
}

export function createMintedEvent(receiver: Address, amount: BigInt): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return mintedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}
