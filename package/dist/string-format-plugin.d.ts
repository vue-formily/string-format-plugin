declare type Data = Record<string, any>;
declare function formatString(format: string, data?: Data | Data[]): string;
declare const _default: {
    name: string;
    format: typeof formatString;
    install(): any;
    options: {};
};

export default _default;
