#!/usr/bin/env node
import inquirer from 'inquirer';
import { createFiles } from "../lib/create-files.js";
import inquirerUserOptions from "../lib/cli-user-options.js";
/**
 * Inputs:
 * --------------------------------------------------------------
 * component name: base-button or BaseButton
 * kebab-case: base-button
 * directory: base-button (default: kebab-case of component name)
 */
// createFiles({
//   componentName: "base-button-one",
//   kebabCase: "base-button-one",
//   directory: "base-button-one",
//   language: "ts",
//   vueVersion: "vue3",
// });
inquirer.prompt(inquirerUserOptions).then((answers) => createFiles(answers));
