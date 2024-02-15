// This will not work after changin extension name of modulesecond.js to modulesecond.mjs

//  const simple = require("./modulesecond");

// import { simple } from "./modulesecond.mjs";  this {} is necessary if you haven't return any default function with Keyword "default"

// import simple  from "./modulesecond.mjs";
// simple();

import * as a2 from "./modulesecond.mjs";
console.log(a2.simple());
