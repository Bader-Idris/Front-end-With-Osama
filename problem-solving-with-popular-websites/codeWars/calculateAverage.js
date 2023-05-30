const findAverage = arr => {
  if (arr.length === 0 && typeof arr === 'object') return 0
  let result = 0;
  arr.forEach(e => result += e);
  return result / arr.length;
};
//! you can use reduce to shorten the code!
console.log(findAverage([]))
console.log(findAverage([1,2,3,4]))// 2.5