import { Currency } from '@pangolindex/sdk';
import React from 'react';
interface Props {
    currency: Currency;
    style: any;
    onSelect: (currency: Currency) => void;
    isSelected: boolean;
    otherSelected: boolean;
}
declare const CurrencyRow: React.FC<Props>;
export default CurrencyRow;
