import { Trade } from '@pangolindex/sdk';
import React from 'react';
interface Props {
    isOpen: boolean;
    trade: Trade;
    originalTrade: Trade | undefined;
    attemptingTxn: boolean;
    txHash: string | undefined;
    recipient: string | null;
    allowedSlippage: number;
    onAcceptChanges: () => void;
    onConfirm: () => void;
    swapErrorMessage: string | undefined;
    onClose: () => void;
}
declare const ConfirmSwapDrawer: React.FC<Props>;
export default ConfirmSwapDrawer;
