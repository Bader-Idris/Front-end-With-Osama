function multiple3and5(n) {
  let result = 0;
  for (let i = n - 1 ; i > 0; i--) {
    if (i % 5 === 0 || i % 3 === 0) result += i;
  }
  return result;
}
console.log(multiple3and5(1000))
module.exports = multiple3and5; //! same as below
// export default multiple3and5;