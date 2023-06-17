/*
  Factorial of a number
  Problem - Give an integer 'n', find the factorial of that integer

  In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all
  positive integers less than or equal to 'n'.

  Factorial of zero is 1.
  factorial(4) = 4*3*2*1 = 24
  factorial(5) = 5*4*3*2*1 = 120
*/
const factorial = (n) => {
  let results = 1;
  for (let i = 2; i <= n; i++) {
    results *= i;
  }
  return results;
}
console.log(factorial(0));// 1
console.log(factorial(1));// 1
console.log(factorial(5));// = 5*4*3*2*1 = 120
// Big-O = O(n) => linear Time Complexity


/*
  Big-O Guide
  Calculation not dependent on input size — 0(1)
  1 loop — O(n)
  2 nested loops — O(n^2)
  Input size reduced by half — O(logN)
*/