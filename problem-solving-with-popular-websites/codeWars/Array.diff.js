// pop-shift a[i] if exists in b[i]
const arrayDiff = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]){
      a[i].pop();
    } else {
      result.push(a[i]);
    }
  }
  return result;
};
console.log(arrayDiff([1,2,2,2,3],[2]))
// needs a lot of working