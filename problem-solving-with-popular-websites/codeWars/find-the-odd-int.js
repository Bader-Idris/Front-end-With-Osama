let nigga = new Set([1,2,2,3,3,3,4,3,3,3,2,2,1])
console.log(nigga)
// ! needs serious thoughts




const removeDuplicates = (str) => str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
console.log(removeDuplicates('HHaannaaddyy'))