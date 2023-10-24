//https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

//Definition for a binary tree node; needs to be called with "new"
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  //base cases
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;

  //create a new TreeNode(center)
  let centerIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIdx]);

  //set left node to center of left subtree
  let leftSubtree = nums.slice(0, centerIdx);
  root.left = sortedArrayToBST(leftSubtree);

  //set right node to center of right subtree
  let rightSubtree = nums.slice(centerIdx + 1, nums.length);
  root.right = sortedArrayToBST(rightSubtree);

  return root;
};

//test case
console.log(sortedArrayToBST([-5,-4,-3,-2,-1,0,1,2,3,4,5]));
// sortedArrayToBST([-10, -3, 0, 5, 9]); // => a root node representing this tree: [0,-3,9,-10,null,5]
