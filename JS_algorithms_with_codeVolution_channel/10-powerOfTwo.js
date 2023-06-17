// Problem - Give a positive integer 'n',
//  determine if the number is a power of 2 or not

// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x[superscript x]
// isPowerOfTwo(1) = true (2⁰)
// isPowerOfTwo(2) = true (2¹)
// isPowerOfTwo(5) = false

const isPowerOfTwo = (n) => {
  // if (n % 2 === 0) return false;
  // else return true;
};

console.log(isPowerOfTwo());
console.log(isPowerOfTwo());
console.log(isPowerOfTwo());
/*
  Big-O Guide
  Calculation not dependent on input size — 0(1)
  1 loop — O(n)
  2 nested loops — O(n^2)
  Input size reduced by half — O(logN)
*/