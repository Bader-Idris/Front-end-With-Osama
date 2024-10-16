let start = 10;
let end = 100;
let exclude = 40;

/* Output
  10
  20
  30
  50
  60
  70
  80
  90
  100
*/
for (let i = 0; i <= end; i+= start) {
  start + i;
  if (i === exclude) continue; 
  if (i > 0) console.log(i)
}
// not the best, but it works
for (let i = 0; i <= end; i+= start) {
  start + i;
  if (i > 0){
    if (i === exclude) continue; 
    console.log(i)
  }
}
// nesting if
// 1rt Assignment✅

let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= stop; i--) {
  if (i == start)console.log(`${i}`);
  else if (i < start) console.log(`0${i}`);
}

/* Output
10
09
08
07
06
05
04
03

  He preserved the outputs as numbers, I can't let 0# as visible. so he'll be meaning to make is as string.
  or I need to find a way to preserve 0s after individual
*/
// 2nd Assignment✅

// Output
```
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
```
let start = 1;
let end = 6;
let breaker = 2;

for (let i = 0; i < end; i++) {
  console.log(start + i);
  for (let j = 0; j < breaker; j+= breaker){
    console.log(`-- ${breaker}`);
    console.log(`-- ${breaker+breaker}`);
  }
};
// 3rd Assignment✅

let index = 10;
let jump = 2;
// let end = 0; no need to it☠️
for (;;) {
  // Write Your Code Here
  console.log(index);//before the condition to print last condition
  index-=jump;//instead of 3rs argument🔴
  if ( jump === index) break;//this is the condition
};
// Output
```
10
8
6
4
```
// 4th Assignment✅

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
```
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
```
for (let i = 0; i < friends.length; i++) {
  if(friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(` ${i} => ${friends[i]}`);
}
// 5th Assignment✅

let start = 0;
let swappedName = "elZerO";

// Output
```
"ELzERo"
```
for (let start = 0; start < swappedName.length; start++) {
  const element = swappedName[start];
  if (element == element.toUpperCase())console.log(element.toLowerCase())
  else console.log(element.toUpperCase());
}
// 6th Assignment❎

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
```
2
3
4
```
for (let i = 0; i < mix.length; i++) {
  if (typeof mix[i] === 'number'){
    if (mix[i] == mix[start]) continue;
    console.log(mix[i])
  } 
}
// less than 3 minutes
// 7th Assignment