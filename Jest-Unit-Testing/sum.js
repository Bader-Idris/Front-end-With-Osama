// const theSum = (num1, num2) => {
//   return (num1|| 0) + (num2 || null);//we can use this truthy falsy pattern
// };// first one, if user didn't add any number

const theSum = (...args) => args.reduce((pv, cv) => pv + cv, 0);// initial is important as for empty func

module.exports = theSum;