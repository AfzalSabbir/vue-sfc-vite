const replaceable = [
    {
        stubName: "index.stub.html",
        replaces: {},
        target: {
            fileName: "index.html",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "vite.config.stub.js",
        replaces: {
            name: "componentNamePascalCase",
            fileName: "kebabCase",
        },
        target: {
            fileName: "vite.config.js",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "package.stub.json",
        replaces: {
            directory: "directory",
            kebabCase: "kebabCase",
        },
        target: {
            fileName: "package.json",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "README.stub.md",
        replaces: {},
        target: {
            fileName: "README.md",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "stub.gitignore",
        replaces: {},
        target: {
            fileName: ".gitignore",
            directory: "./",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "main.stub.js",
        replaces: {},
        target: {
            fileName: "main.js",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "App.stub.vue",
        replaces: {
            componentName: "componentNamePascalCase",
        },
        target: {
            fileName: "App.vue",
            directory: "./src",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "index.stub.js",
        replaces: {
            componentName: "componentName",
        },
        target: {
            fileName: "index.js",
            directory: "./src/components",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "componentName.stub.vue",
        replaces: {
            componentNamePascalCase: "componentNamePascalCase",
        },
        target: {
            fileName: "*.vue",
            directory: "./src/components",
        },
        language: [
            "js", "ts"
        ]
    },
    {
        stubName: "vite-env.d.stub.ts",
        replaces: {},
        target: {
            fileName: "vite-env.d.ts",
            directory: "./src",
        },
        language: [
            "ts"
        ]
    },
    {
        stubName: "tsconfig.stub.json",
        replaces: {},
        target: {
            fileName: "tsconfig.json",
            directory: "./",
        },
        language: [
            "ts"
        ]
    },
    {
        stubName: "tsconfig.node.stub.json",
        replaces: {},
        target: {
            fileName: "tsconfig.node.json",
            directory: "./",
        },
        language: [
            "ts"
        ]
    },
];
export default replaceable;
