import { aA, arr, saySomething as s } from "./main.js";

console.log(aA);
console.log(arr);
console.log(s());
// 168th lesson 2nd in Modules
/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/

let aC = 10;
let arrC = [1, 2, 3, 4];

function saySomethingC() {
  return `Something`;
}

export { aC as myNumberC, arrC, saySomethingC };

export default function () {// default export is valid only once,
  // and we can't import it with other properties[named import] as in line 22
  return `Hello`;
}
// so to import default objects we do this, typing its name then comma,
// import saySomethingC, { aC as myNumberC, arrC, saySomethingC } from "./tendedFile.js";
