var findMaxConsecutiveOnes = function(nums) {
  let prev = -1;
  let result = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== 1) {
      result = Math.max(result, i - prev -1);
      prev = i;
    }
  }
  return result;
};