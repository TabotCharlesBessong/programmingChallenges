
const isPalindrome = (head) => {
  let left = null
  let right = null
  let slow = head
  let fast = head
  let temp = null

  while (fast && fast.next) {
    fast = fast.next.next
    temp = slow.next
    slow.next = left
    left = slow
    slow = temp
  }

  right = fast ? slow.next : slow

  while (left && right) {
    if (left.val!== right.val) {
      return false
    }
    left = left.next
    right = right.next
  }

  return true
}

console.log(isPalindrome([1,2,3,4,4,3,2,1]))