// "This is an example!" => "sihT si na !elpmaxe"

// const reverseWords = str => {
//   let arr = str.split(' ')
//   for (let i = 0; i < arr.length; i++) {
//     let results = [];
//     arr.forEach(e => {
//       let i = e.split('').reverse().join('')
//       results.push(i)
//     });
//     return results.join(' ')
//   }
// };

// Bito helped me with this lovely map high order function, I need to master it for express projects
const reverseWords = str => {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
};
console.log(reverseWords("This is an example!"))