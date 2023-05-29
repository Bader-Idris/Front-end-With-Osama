// Sum of positive array
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// const positiveSum = arr => {
//   let result = 0;
//   [...arr].filter((e, ind, arr) => {
//     if (e > 0) result += e;
//   });
//   return result;
// };//! works well, but reduce is better. OMG 😲🔽
const positiveSum = arr => arr.reduce((result, num) => num > 0 ? result + num : result, 0);
console.log(positiveSum([1,-4,7,12]))