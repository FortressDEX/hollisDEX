import { ChainId, CurrencyAmount } from '@pangolindex/sdk';
import { Currency, CurrencyAmount as UniCurrencyAmount } from '@uniswap/sdk-core';
/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export declare function maxAmountSpend(chainId: ChainId, currencyAmount?: CurrencyAmount): CurrencyAmount | undefined;
export declare function galetoMaxAmountSpend(chainId: ChainId, currencyAmount?: UniCurrencyAmount<Currency>): any | undefined;
