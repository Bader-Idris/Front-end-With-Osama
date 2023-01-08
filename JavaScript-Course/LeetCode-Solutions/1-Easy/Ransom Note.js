var canConstruct = function(ransomNote, magazine) {//we can use forEach loop instead
  for (let i = 0; i < ransomNote.length; i++) {
    let r = ransomNote[i];//need a check
    // we can use indexOf(r); instead of all this nested looping
    let matchingIndex = -1;
    for (let j = 0; j < magazine.length; j++) {
      let m = magazine[j];
      if (m == r) {
        matchingIndex = j;
      } else {
        return matchingIndex ==1;
      }
    }
  }
  return r;
};