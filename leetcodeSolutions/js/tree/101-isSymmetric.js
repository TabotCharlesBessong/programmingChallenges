
const isSymmetric = (root) => {
  if(root == null) return true
  return isMirror(root.left,root.right)
}

const isMirror = (leftNode,rightNode) => {
  if(leftNode === null && rightNode === null) return true
  if(leftNode === null || rightNode === null) return false
    
  return leftNode.val === rightNode.val && isMirror(leftNode.left,rightNode.right) && isMirror(leftNode.right,rightNode.left)
}

// console.log(isSymmetric[1,2,2,3,4,4,3])