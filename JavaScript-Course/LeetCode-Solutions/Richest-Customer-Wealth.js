let maximumWealth = function (accounts) {
  let storeMaxVal = 0;
  for (let i = 0; i < accounts.length; i++) {
    let innerArr = accounts[i];
    let sum = 0;
    for (let j = 0; j < innerArr.length; j++) {
      sum += innerArr[j];
    }
    storeMaxVal = Math.max(storeMaxVal, sum);
  }
  return storeMaxVal;
};
