// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive.
//  The string can contain any char.
// const XO = str => {
//   let xes = 0, oes = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === 'x'||str[i] === 'X') xes++;
//     if (str[i] === 'o'||str[i] === 'O') oes++;
//   }
//   return xes === oes ? true : false;
// };
//! using regExp
const XO = str => {
  const xes = str.match(/x/gi) || [];
  const oes = str.match(/o/gi) || [];
  return xes.length === oes.length;
};
console.log(XO("ooxx"))// => true
console.log(XO("xooxx"))// => false