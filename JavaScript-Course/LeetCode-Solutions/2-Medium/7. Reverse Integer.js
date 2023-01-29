/**
* @param {number} x
* @return {number}
*/
const reverse = (x) => {
  if(x < 0) return -1 * reverse(-x);
  const solution = (x +"").split('').reverse().join('');//a good way to invert integer into string
  return (solution > 2**31 -1)?0: solution;
};
// If we don't use return it'll output undefined