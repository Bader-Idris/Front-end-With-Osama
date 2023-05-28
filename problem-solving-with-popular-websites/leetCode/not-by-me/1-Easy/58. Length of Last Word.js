var lengthOfLastWord = function(s) {
  let lWordCount = 0;
  for (let i = s.length - 1;i >= 0; i--) {
    if (s[i] !== " ") {
      for (let j = i; j>=0; j--) {
        if (s[j] !== " ") {
          lWordCount++;
        } else {
          return lWordCount;
        }
      }
      return lWordCount;
    }
  }
};
// what I thought to use!!
var lengthOfLastWord = function(s) {
  const strArray = s.trim().split(" ");
  return strArray[strArray.length-1].length;
};