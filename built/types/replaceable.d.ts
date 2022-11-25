interface Replaceable {
    stubName: string;
    replaces: {
        [key: string]: string;
    };
    target: Target;
    language: Language[];
}
type Target = {
    fileName: string;
    directory: string;
};
type Language = "ts" | "js";
export { Replaceable, Target, Language };
