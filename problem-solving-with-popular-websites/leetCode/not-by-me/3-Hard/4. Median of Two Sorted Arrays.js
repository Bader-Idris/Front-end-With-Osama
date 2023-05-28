/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var concat = nums1.concat(nums2);
  concat = concat.sort((a,b)=> a-b);
  // console.log(concat);
  var length = concat.length;
  if (length%2 == 1) {
    // console.log(concat[(length/2)-.5])
    return concat[(length/2)-.5]
  } else {
    return (concat[length/2]+concat[(length/2)-1])/2
  }
};
// we call this as binary search
