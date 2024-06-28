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

function fibonacci(n) {
  const fib = [0, 1];// we set these 2 indexes for the first results
  for (let i = 2; i < n; i++) {// starting at 2
    fib[i] = fib[i - 1] + fib[i - 2];// the love of this algorithm
  }
  return fib;
}
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]
// Big-O = O(n)// because of the while loop




/*
  Big-O Guide
  Calculation not dependent on input size — 0(1)
  1 loop — O(n)
  2 nested loops — O(n^2)
  Input size reduced by half — O(logN)
*/