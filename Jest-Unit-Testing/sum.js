const theSum = (num1, num2) => {
  return (num1|| 0) + (num2 || null);//we can use this truthy falsy pattern
};// first one, if user didn't add any number

module.exports = theSum;