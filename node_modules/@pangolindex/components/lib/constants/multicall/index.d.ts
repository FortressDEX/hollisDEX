import { ChainId } from '@pangolindex/sdk';
import MULTICALL_ABI from './abi.json';
declare const MULTICALL_NETWORKS: {
    [chainId in ChainId]: string;
};
export { MULTICALL_ABI, MULTICALL_NETWORKS };
