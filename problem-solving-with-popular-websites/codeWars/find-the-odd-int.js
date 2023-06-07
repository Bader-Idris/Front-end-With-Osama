
const removeDuplicates = (str) => str.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
console.log(removeDuplicates('HHaannaaddyy'))