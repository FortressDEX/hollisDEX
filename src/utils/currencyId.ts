import { Currency, CAVAX, Token, ChainId } from '@hollis/sdk'

export function currencyId(currency: Currency, chainId: ChainId): string {
  if (chainId && currency === CAVAX[chainId]) return 'MATIC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
