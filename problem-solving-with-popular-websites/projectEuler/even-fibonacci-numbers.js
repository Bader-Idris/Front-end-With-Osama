// function EvenFibonacci(n) {
// }
// console.log(EvenFibonacci(10), 'hi');
function fibonacci(n){
  let fib = [0, 1];
  // let even = [];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i-1] + fib[i-2]);
  }
  return fib;
  // for (let i = 0; i < fib.length; i++) {
  //   if (fib[i] % 2 == 0) {
  //     even.push(fib[i])
  //   }
  // }
  // even.unshift(even[0]);
  // return even;
}
// Test the function
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// ! oh man