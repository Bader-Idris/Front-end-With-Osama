var numberOfSteps = function (num) {
  steps = 0;
  while (num > 0) {
    if (num % 2 == 0) {
      num /= 2;
    } else {
      num--;//same as num -= 1
    }
    steps++;//same as num += 1
  }
  return steps;
};
// The fastest solution is:
var numberOfSteps = function(num) {
  let i = 0;
  for (; num > 0; i++) {
      if (num & 1) num -= 1;
      else num >>= 1;
  }
  return i;
};