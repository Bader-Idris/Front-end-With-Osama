/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal (root) {
  let tourist = root;
  let solution = [];
  while (tourist !== null){
    let guide = tourist.left;
    if (tourist.left !== null) {
      while (guide.right !== null && guide.right !== tourist) {
        guide = guide.right;
    }
    if (guide.right === null) {
      guide.right = tourist;
      tourist = tourist.left;
    } else {
      guide.right = null;
      solution.push(tourist.val);
      tourist = tourist.right;
    }
  } else {
    solution.push(tourist.val);
    tourist = tourist.right;
    }
  }
  return solution;
};
// the fastest was
var inorderTraversal = function(root) {
  const stack = [];
  const outputArr = [];
  let current = root;
  
  while(current || stack.length) {
      while(current) {
          stack.push(current);
          current = current.left
      }

      current = stack.pop();
      outputArr.push(current.val);
      current = current.right;
  }
  return outputArr;
};