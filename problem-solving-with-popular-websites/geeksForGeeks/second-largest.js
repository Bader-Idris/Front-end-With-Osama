let filedArr = [12, 35, 1, 10, 34, 1]
let arr = [];
filedArr.forEach(e => {
  if (Math.max(...filedArr) != e) arr.push(e)
});
console.log(Math.max(...arr));

// ! above is done but its time complexity is bad it's O(n²)
function print2largest(arr, n) {
  const filteredArr = arr.filter(e => e !== Math.max(...arr));
  return Math.max(...filteredArr);
}
console.log(print2largest(filedArr))

// console.log([...filedArr].sort().reverse()[1])
// console.log(filedArr.sort()[filedArr.length -2])
// TODO: fully solution for tended problem:
/*
  ? 1) Initialize two variables first and second to INT_MIN as
  ?   first = second = INT_MIN
  ? 2) Start traversing the array,
  ?   a) If the current element in array say arr[i] is greater
  ?       than first. Then update first and second as,
  ?       second = first
  ?       first = arr[i]
  ?   b) If the current element is in between first and second,
  ?       then update second to store the value of current variable as
  ?       second = arr[i]
  ? 3) Return the value stored in second.
*/
// ! Mine didn't work