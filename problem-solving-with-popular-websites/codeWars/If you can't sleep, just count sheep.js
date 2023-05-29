// assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
// const countSheep = (num) => {
//   let arr = [];
//   for (let i = 0; i < num; i++) {
//     if (num > 0) {
//       arr.push(`${i + 1} sheep...`);
//     }
//     else return ''
//   }
//   return arr.toString().replaceAll(',', '');
// }
const countSheep = (num) => {
  return num > 0 ? Array.from({length: num}, (_, i) => `${i + 1} sheep...`).join('') : '';
};
console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
// "1 sheep...2 sheep...3 sheep..."
// "1 sheep...2 sheep...3 sheep..."