/**
  this challenge is to sum every number with its next one
*/

function seriesSum(n) {
  return (n * (n + 1)) / 2;
}
console.log(seriesSum(5));//15 => 1 + 2 + 3 + 4 + 5


/*
This function calculates the sum of integers from 1 to  `n`  using a mathematical formula
    called the "arithmetic series formula". The formula states that the sum of  `n` 
      consecutive integers starting from 1 is equal to  `(n * (n + 1)) / 2` . 
  For example:
- If  `n`  is 1, the sum is 1, which is equal to  `(1 * (1 + 1)) / 2` .
- If  `n`  is 2, the sum is 1 + 2 = 3, which is equal to  `(2 * (2 + 1)) / 2` .
- If  `n`  is 3, the sum is 1 + 2 + 3 = 6, which is equal to  `(3 * (3 + 1)) / 2` .
  The formula works by multiplying the number of consecutive integers  `n` 
    by the average of the first and last integers in the sequence,
      which is  `(1 + n) / 2` . This results in the formula  `(n * (1 + n)) / 2` , which simplifies to  `(n * n + n) / 2` . The final step is to divide the result by 2 to obtain the sum of the integers from 1 to  `n` . 
  The function  `seriesSum(n)`  simply applies this formula to the input value  `n`  and returns the result.
*/