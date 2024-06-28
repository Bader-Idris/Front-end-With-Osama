/*
  1st lesson:
  Course Topics
  -- Algorithm
  -- Measuring performance
  -- Time & Space complexity
  -- Big O notation
  --- Math algorithms
  --- Sort
  --- Search
  --- Misc. algorithms and problem solving

  How to represent complexity?
  Asymptotic notations
  - Mathematical tools to represent time and space complexity
  ✅ 1. Big-O Notation (O-notation) — Worst case complexity
  ❎ 2. Omega Notation (Ω-notation) — Best case complexity
  ❎ 3. Theta Notation (Θ-notation) Average case complexity
  [emoji is for tended review questionnaires]

  ! Important
  [[Objects]] - Big-O
  An object is a collection of key value pairs
  Insert — 0(1)
  Remove — 0(1)
  Access — 0(1)
  Search —O (n)
  Object.keys() — O(n)
  Object.values() — O(n)
  Object.entries() O(n)

  [[Array]] - Big-O
  An array is an ordered collection of values
  Insert / remove at end 0(1)
  Insert / remove at beginning — O(n)
  Access — 0(1)
  Search O(n)
  Push / pop — 0(1)
  Shift / unshift / concat / slice / splice —
  forEach / map / filter / reduce — O(n)
  O(n)
*/

// ## lesson:
// Big-O Time Complexity Contd.
function summation(n) {// [n = 4]
  let sum = 0;// 1
  for (let i = 1; i <= n; i++) {
    sum += i;// if n == 4;
  }
  return sum;//1
};
// this function's Big-O TC is n + 2; we overlook 2 so: O(n)

/* 7th lesson:
  Fibonacci sequence
  Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence
  In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the
  two preceding ones.

  The first two numbers in the sequence are 0 and 1.
  fibonacci(2) = [0,1]
  fibonacci(3) = [0,1,1]
  fibonacci(7) = [0,1,1,2,3,5,8]
*/
// in https://replit.com we compile JS
function fibonacci(n) {
  const fib = [0,1];// we set these 2 indexes for the first results
  for (let i = 2; i < n; i++) {// starting at 2
    fib[i] = fib[i - 1] + fib[i - 2];// the love of this algorithm
  }
  return fib;
}
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
// Big-O = O(n)// because of the while loop

// 8th lesson 2nd problem: Factorial Of A Number
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
factorial(0);// 1
factorial(1);// 1
factorial(5);// = 5*4*3*2*1 = 120
// Big-O = O(n) => linear Time Complexity

/*
  Big-O Guide
  Calculation not dependent on input size — 0(1)
  1 loop — O(n)
  2 nested loops — O(n^2)
  Input size reduced by half — O(logN)
*/