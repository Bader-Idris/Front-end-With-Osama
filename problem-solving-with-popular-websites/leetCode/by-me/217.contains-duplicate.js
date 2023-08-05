
let arr = [1, 2, 3, 4, 1]
const duplication = (arr) => {
  let result = false
  arr.sort().map((c, i, array) => {
    if (c == array[i + 1]) result = true
    // console.log(c)
  })
  return result
}
console.log(duplication(arr));


// I solved this after neetCode tutor said: sorting is a solving, but it's bad for CPUs
// because its O(n log²) time complexity, with space it's good,
//  but modern coding needs fast on behalf of small

// So, try another approach as brute force , I learned it but forgot it😃
// when having extra memory we can use hashSet

// teacher's solution with Set()
```py
class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    hashset = set()

    for n in nums:
      if n in hashset:
        return True
      hashset.add(n)
    return False
```
// trying to convert it to JS
const duplication2 = (nums) => {
  const hashset = new Set()
  for (const n in nums) {//should be of not in
    if (hashset.has(n)) return true;
    // forgot to add n to hashset
  }
  return false//should be outside the for loop
};

// bito fixing
const containsDuplicate = (nums) => {
  const hashset = new Set();
  for (const n of nums) {
    if (hashset.has(n)) return true;
    hashset.add(n);
  }
  return false;
};