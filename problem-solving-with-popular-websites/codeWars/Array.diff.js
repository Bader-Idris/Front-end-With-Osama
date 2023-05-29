// pop-shift a[i] if exists in b[i]
const arrayDiff = (a, b) => {
  return a.filter(num => !b.includes(num));
};
console.log(arrayDiff([1,2,2,2,3],[2])); // Output: [1, 3]
//! I didn't make it, Bito helped me!!! 😠