// Move the first letter of each word to the end of it,
//  then add "ay" to the end of the word. Leave punctuation marks untouched.

const  pigIt = (str) => {
  return str.split(' ').map(e => {
    return e.length > 0 && !e.match(/[!@#$%^&*]/) ? e.substring(1) +  e.slice(0,1) + 'ay' : e;
  }).join(' ');
};
//! a boy used this regExp:
/*
const  pigIt = (str) => {
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
};

  ! more clever:
  const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay'); 
*/
console.log(pigIt('Pig latin is cool'));// igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));    // elloHay orldway !
console.log(pigIt('Hello world o'));