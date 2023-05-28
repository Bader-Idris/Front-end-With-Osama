// invert arr[i] as numbers 1 becomes -1 and opposite
// const invert = arr => {
//   return [...arr]
// }
const invert = arr => arr.map(num => num = -num);
console.log(invert([1,2,-1,-2]))