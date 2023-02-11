import * as fs from "fs";
import * as path from "path";
import Case from "case";
import replaceable from "./replaceable.js";
import ejs from "ejs";

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// vue-sfc-vite base path
const vueSFCVitePath = path.resolve(__dirname, "..", "..");
// current working directory
const cwd = process.cwd();
// which directory to create the file in
const installToDistPath = path.resolve(cwd);
// stubs directory
const installFromStubsPath = path.resolve(vueSFCVitePath, "stubs");

/**
 *
 * @param {*} options
 * @returns
 */
const createFiles = (options) =>
  replaceable.filter((x) => x.language.includes(options.language)).forEach((replaceData) => createFile(options, replaceData));

/**
 *
 * @param {*} options
 * @param {*} replaceData
 */
const createFile = (options, replaceData) => {
  const newOptions = options;
  const replaces = {};
  newOptions.componentNamePascalCase = Case.pascal(newOptions.componentName);
  newOptions.componentNameKebabCase = Case.kebab(newOptions.componentName);
  newOptions.ts = newOptions.language === "ts";

  // read any file src/vite.config.js
  const file = path.resolve(
    installFromStubsPath,
    replaceData.target.directory,
    replaceData.stubName
  );
  const replace = fs.readFileSync(file, {encoding: "utf-8"});

  // replace all replaceable values
  Object.entries(replaceData.replaces).forEach(([key, value]) => {
    replaces[key] = newOptions[value as string];
    // replace = replace.replace(
    //   new RegExp(`\\$\\{${key}\\}`, "g"),
    //   newOptions[value]
    // );
  });

  // write the file to the target directory
  let fileName = replaceData.target.fileName;
  if (fileName.includes("*.")) {
    fileName = fileName.replace("*", newOptions.componentName);
  }

  if (newOptions.ts && fileName.endsWith(".js")) {
    fileName = fileName.replace(".js", ".ts");
  }

  const distFile = path.resolve(
    installToDistPath,
    newOptions.directory,
    replaceData.target.directory,
    fileName
  );
  fs.mkdirSync(path.dirname(distFile), { recursive: true });
  fs.writeFileSync(
    distFile,
    ejs.render(replace, { ...newOptions, ...replaces })
  );
};

export { createFiles };
