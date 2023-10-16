#!/usr/bin/env node

import untruncateJson from "./index";

const json = process.argv[2];

// tslint:disable-next-line:no-console
console.log(untruncateJson(json));
