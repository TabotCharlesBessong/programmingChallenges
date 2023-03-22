
const maxDepth = (root) => {
  if(!root) return null;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}

console.log(maxDepth([3,9,20,null,null,15,7]))