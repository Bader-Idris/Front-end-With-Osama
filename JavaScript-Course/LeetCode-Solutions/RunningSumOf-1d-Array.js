// all are in a function

// firstly make an array as results = nums.length
// secondly, he made first index of that array as first index of nums, which is 0
/* then for loop:
*/
// for (let i = 1; i < num.length; i++) {
//   results[i] = nums[i] + results[i - 1];
// }
// return results;
//after setting results&&nums as equation, he made i as 1
// second way is what I tried, without having a new array, only summing numbers, but its bad practice 
// is that the indexes are going to change from original array.
// for (let i = 1; i < nums.length; i++) {
//   nums[i] = nums[i - 1] + nums[i];// nums[i - 1]+ nums[i], means to calculate previous index to current one🔴🟢
//   // can be as:  nums[i] += nums[i - 1];
//   return nums;//inside func not for-loop
// }

// first one after solving❎ Didn't work in JS, instead of Java. I think it's for not connecting both results and nums arrays 
var runningSum = function(nums) {
  results = nums.length;
  results[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    results[i] = nums[i] + results[i - 1];
  }
  return results;
};
// second one after solving✅
let runningSum2 = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] + nums[i];
  }
  return nums;
}