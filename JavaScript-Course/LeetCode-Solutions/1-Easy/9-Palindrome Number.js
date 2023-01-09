
var isPalindrome = function(x) {
  if(x < 0){
    return false;
  }
  let reversed = 0;
  let current = x;
  while(current!== 0){
    reversed = reversed*10 + current % 10;
    current = Math.floor(current/10);
  }
  return x === reversed;
};
// what I failed impacting is:
var isPalindrome = function(x) {
  const target = x.toString();
if (target[0] !== target[target.length - 1]) return false;
if ((target.length === 0) | (target.length === 1)) return true;

return isPalindrome(target.slice(1, target.length - 1));
};