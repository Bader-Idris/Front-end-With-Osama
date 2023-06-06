// Your classmates asked you to copy some paperwork for them.
//  You know that there are 'n' classmates and the paperwork has 'm' pages.
/* examples
  n= 5, m=5: 25
  n=-5, m=5:  0
*/
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0;
console.log(paperwork(5,5))  //25
console.log(paperwork(5,-5)) // 0
console.log(paperwork(-5,-5))// 0
console.log(paperwork(-5,5)) // 0
console.log(paperwork(5,0))  // 0