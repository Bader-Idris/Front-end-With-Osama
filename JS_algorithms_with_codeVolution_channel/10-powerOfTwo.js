// Problem - Give a positive integer 'n',
//  determine if the number is a power of 2 or not

// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x[superscript x]

const isPowerOfTwo = (n) => n % 2 == 1 && n > 1 ? false : true;//this is same as down Bitwise: O(1)
const isPowerOfTwo1 = (n) => {
  // teacher's job is:
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 != 1) return false
    n = n / 2;
    return true;
  }
  // Time complexity: O(logⁿ)
  // because the input size is reduced by half
}

console.log(isPowerOfTwo(1));//true (2⁰)
console.log(isPowerOfTwo(2));//true (2¹)
console.log(isPowerOfTwo(5));//false
/*
  Big-O Guide
  Calculation not dependent on input size — 0(1)
  1 loop — O(n)
  2 nested loops — O(n^2)
  Input size reduced by half — O(logN)
*/

// second BitWise func
function isPowerOfTwoBitWise (n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

/*
  Bitwise Power of Two
    1 -> 1
    2 -> 10
    3 -> 100
    4 -> 1000

  1 - 0001    2 - 0010    3 - 0100    4 - 1000
  0 - 0000    1 - 0001    2 - 0010    3 - 0100
  --------    --------    --------    --------
  0 - 0000    0 - 0000    0 - 0000    0 - 0000
*/
//! he said this is more optimal, because it deals with binary
// its time complexity is O(1)