let firstProm = prompt('Print Number From – To',"Example: 5-20");
firstProm.split('-').map((cur, ind, arr) => {
  sortedArr = arr.sort().reverse();
  while (+sortedArr[0] <= +sortedArr[1]) {
    console.log(+sortedArr[0]);
    +sortedArr[0]++;
  }
});
// 1st Assignment ✅
