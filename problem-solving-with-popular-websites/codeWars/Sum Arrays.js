// Sum Numbers
// const sum = nums => {
//   let result = 0;
//   [...nums].forEach((num) => {
//     result += num;
//   });
//   return result;
// }
const sum = nums => [...nums].reduce((acc, num) => acc + num, 0);
console.log(sum([]))//=> 0
console.log(sum([1, 5.2, 4, 0, -1]))//=> 9.2