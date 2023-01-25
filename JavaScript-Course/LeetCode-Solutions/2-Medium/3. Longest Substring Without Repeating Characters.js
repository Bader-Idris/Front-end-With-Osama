/**
 * @param {string} s
 * @return {number}
 */
const isUnique = (s) => {
  const set = new Set()
  for (let x = 0; x < s.length; x++) {
    if(set.has(s[x])) {
      return false
    }
    set.add(s[x])
  }
  return true
}
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.substring(i, j + 1)
      if(isUnique(substring)) {
        max = Math.max(max, substring.length);//Important to remove extra strings,🔽 are same as this line
        // if (substring.length > max) {
        //   max = substring.length;
        // }
      }
    }
  }
  return max;
};
// this one checks each substring, and leetCode consider it as low pace. so its time complexity is O(n³) or n^2
var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let begin = 0;
  let map = {};//hashMaps in JS are same as objects
  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      begin = map[s[end]] +1;
    }
    map[s[end]] = end;
    max = Math.max(max,end - begin + 1);
  }
  return max;
}