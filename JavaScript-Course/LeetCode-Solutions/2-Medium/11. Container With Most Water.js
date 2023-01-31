/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftPointer = 0;
  let rightPointer = height.length -1;
  let maxAreaCalc = findArea(leftPointer, rightPointer,height)
  while(leftPointer<rightPointer){
    if(height[leftPointer]< height[rightPointer]){
      leftPointer++;
    }else {
      rightPointer--;
    }
  const currentArea = findArea(leftPointer, rightPointer,height);
  maxAreaCalc = Math.max(currentArea,maxAreaCalc);
  }
  return maxAreaCalc;

};
var findArea = function(leftPointer, rightPointer,height){
  const width = rightPointer - leftPointer;
  const length = Math.min(height[leftPointer], height[rightPointer])
  const area = width * length;
  return area;
}