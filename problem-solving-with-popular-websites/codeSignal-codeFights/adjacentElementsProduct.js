// const isPalindrome = (arr) => {
//   return arr.every((val, index) => val === arr[arr.length - index - 1]);
// };
// const head = [1, 2, 3, 2, 1];
// const result = isPalindrome(head) ? 1 : 0;
// console.log(result);
// // testing purposes

// return the multiple of (Math.max i, its adjacent i)
// it's a crazy question, results in its site are arbitrary🤪
const solution = arr => {
  let highest = arr.indexOf(Math.max(...arr))
  if (arr[highest + 1] > 1) {
    return arr[highest] * arr[highest + 1]
  } else {
    return arr[highest] * arr[highest - 1]
  }
};
console.log(solution([3, 6, -2, -5, 7, 3]));// 7 * 3 => 21
console.log(solution([1, 2, 3, 0]));//6
console.log(solution([9, 5, 10, 2, 24, -1, -48]));//50
console.log(solution([5, 6, -4, 2, 3, 2, -23]));//30
// console.log(solution());
// console.log(solution());
// console.log(solution([5, 1, 2, 3, 1, 4]));// 6