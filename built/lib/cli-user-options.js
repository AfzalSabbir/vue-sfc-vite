import Case from "case";
const inquirerUserOptions = [
    {
        type: "list",
        name: "vueVersion",
        message: "Which version of Vue are you writing for?",
        choices: [
            { name: "Vue 3", value: "vue3" },
            { name: "Vue 2", value: "vue2" },
        ],
    },
    {
        type: "list",
        name: "type",
        message: "Is this a single component or a library?",
        choices: ["Single Component"],
        // filter(val) {
        //   return val.toLowerCase();
        // },
    },
    {
        type: "input",
        name: "componentName",
        message: "What is the npm name of your component?",
        default: "my-component",
        validate: (input) => {
            if (!input) {
                return "Please enter a valid npm name";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "kebabCase",
        message: "What is the kebab-case tag name for your component?",
        default: (answers) => Case.kebab(answers.componentName),
        validate: (input) => {
            if (!input) {
                return "Please enter a valid kebab-case tag name";
            }
            return true;
        },
    },
    {
        type: "list",
        name: "language",
        message: "Will this component be written in JavaScript or TypeScript?",
        choices: [
            { name: "JavaScript", value: "js" },
            { name: "TypeScript", value: "ts" },
        ],
    },
    {
        type: "input",
        name: "directory",
        message: "Enter a location to save the component files:",
        default: (answers) => `./${answers.kebabCase}`,
        filter: (val) => val.replace(/\.\/|\/|\\|\.\.\//g, ""),
        validate: (input) => {
            if (!input) {
                return "Please enter a valid directory";
            }
            return true;
        },
    },
];
export default inquirerUserOptions;
