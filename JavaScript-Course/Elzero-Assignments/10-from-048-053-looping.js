let start = 10;
let end = 100;
let exclude = 40;

// Output
/*
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
