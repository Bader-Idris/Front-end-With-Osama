import { aA, arr, saySomething as s } from "./main.js";

console.log(aA);
console.log(arr);
console.log(s());
// 168th lesson
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

export default function () {
  return `Hello`;
}