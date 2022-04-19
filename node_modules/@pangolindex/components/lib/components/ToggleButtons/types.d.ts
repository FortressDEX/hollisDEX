export declare type ToggleButtonsProps = {
    name?: string;
    /** id **/
    id?: string;
    /** called when state change **/
    onChange?: (value: any) => void;
    value?: any;
    size?: number;
    options: Array<string>;
};
