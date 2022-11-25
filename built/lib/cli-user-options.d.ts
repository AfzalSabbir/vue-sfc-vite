declare const inquirerUserOptions: ({
    type: string;
    name: string;
    message: string;
    choices: {
        name: string;
        value: string;
    }[];
    default?: undefined;
    validate?: undefined;
    filter?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    choices: string[];
    default?: undefined;
    validate?: undefined;
    filter?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: string;
    validate: (input: any) => true | "Please enter a valid npm name";
    choices?: undefined;
    filter?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: (answers: any) => string;
    validate: (input: any) => true | "Please enter a valid kebab-case tag name";
    choices?: undefined;
    filter?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default: (answers: any) => string;
    filter: (val: any) => any;
    validate: (input: any) => true | "Please enter a valid directory";
    choices?: undefined;
})[];
export default inquirerUserOptions;
