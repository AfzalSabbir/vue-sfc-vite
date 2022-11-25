#!/usr/bin/env node

import inquirer from 'inquirer';
import { createFiles } from "../lib/create-files.js";
import inquirerUserOptions from "../lib/cli-user-options.js";

inquirer.prompt(inquirerUserOptions).then((answers) => createFiles(answers));