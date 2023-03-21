
const inorderTraversal = (root) => {
  var res = [];
  helper(root, res);
  return res;
};

const helper = (root, res) => {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
};

console.log(inorderTraversal([1,null,2,3]))