import { TokenList, Version } from '@pangolindex/token-lists';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
export declare const fetchTokenList: Readonly<{
    pending: ActionCreatorWithPayload<{
        url: string;
        requestId: string;
    }>;
    fulfilled: ActionCreatorWithPayload<{
        url: string;
        tokenList: TokenList;
        requestId: string;
    }>;
    rejected: ActionCreatorWithPayload<{
        url: string;
        errorMessage: string;
        requestId: string;
    }>;
}>;
export declare const acceptListUpdate: ActionCreatorWithPayload<string, string>;
export declare const addList: ActionCreatorWithPayload<string, string>;
export declare const removeList: ActionCreatorWithPayload<string, string>;
export declare const selectList: ActionCreatorWithPayload<{
    url: string;
    shouldSelect: boolean;
}, string>;
export declare const rejectVersionUpdate: ActionCreatorWithPayload<Version, string>;
