/*
  Recursive Fibonacci sequence

  Problem - Give a number 'n', find the nth element of the Fibonacci sequence
  In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the
  two preceding ones.
  (0,1,1,2,3,5,8)
  recursiveFibonacci(0) = 0
  recursiveFibonacci(1) = 1
  recursiveFibonacci(6) = 8
  
  instead of gathering all prior numbers to 6th for ie, we want only the nth one

  ? Tips For recursive solution
  - Figure out how to break down the problem into smaller versions of the same problem
  - Identify the base case for recursion
*/

const recursiveFibonacci = (n) => {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n -2);
}
console.log(recursiveFibonacci(0))//0
console.log(recursiveFibonacci(1))//1
console.log(recursiveFibonacci(6))//8
console.log(recursiveFibonacci(7))//