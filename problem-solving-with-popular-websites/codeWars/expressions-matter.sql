const expressionMatter = (a, b, c) => {
  arr = [a, b, c];
  let max = Math.max(...arr);
  let maxInd = arr.indexOf(max);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr.indexOf(arr[i]) !== arr.indexOf(arr[maxInd])) sum += arr[i];
  }
  return sum * arr[maxInd];
}

const expressionMatter = (a, b, c) => {
  arr = [a, b, c];
  let max = Math.max(...arr);
  let index = arr.indexOf(max);
  let sum = 1;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== max) sum *= arr[i];
  }
  return sum * max;
}
console.log(expressionMatter(2, 1, 2))//, 6
console.log(expressionMatter(2, 1, 1))//, 4
console.log(expressionMatter(1, 1, 1))//, 3
console.log(expressionMatter(1, 2, 3))//, 9
console.log(expressionMatter(1, 3, 1))//, 5
console.log(expressionMatter(2, 2, 2))//, 8