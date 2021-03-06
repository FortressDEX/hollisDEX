import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@pangolindex/web3-react-injected-connector'
import { DefiConnector } from './DefiConnector'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '137')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL },
  defaultChainId: NETWORK_CHAIN_ID
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

export const injected = new InjectedConnector({
  supportedChainIds: [137, 11111]
})

export const gnosisSafe = new SafeAppConnector({
  supportedChainIds: [137, 11111]
})

export const walletlink = new WalletLinkConnector({
  url: NETWORK_URL,
  supportedChainIds: [137, 11111],
  appName: 'Hollis',
  appLogoUrl: 'https://raw.githubusercontent.com/pangolindex/interface/master/public/images/384x384_App_Icon.png'
})

export const walletconnect = new WalletConnectConnector({
  rpc: {
    137: NETWORK_URL
  },
  qrcode: true,
  bridge: 'https://bridge.walletconnect.org'
})

export const xDefi = new DefiConnector({
  supportedChainIds: [1, 137, 11111]
})
