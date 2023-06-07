
// Given a non-empty array of integers,
//  return the result of multiplying the values together in order. Example:

// example
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = x => {
  let result = 1;
  for (let i = 0; i < x.length; i++) {
    result *= x[i];
  }
  return result
};

// const grow = x => x.reduce((acc, val) => acc * val);// fix initial value as 1 if you'll ever open me!🤪
console.log(grow([1, 2, 3]))// 6
console.log(grow([4, 1, 1, 1, 4]))// 16
console.log(grow([2, 2, 2, 2, 2, 2]))// 64