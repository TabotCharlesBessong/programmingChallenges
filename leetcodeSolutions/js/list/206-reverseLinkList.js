
// const reverseList = (head) => {
//   let newHead = null
//   let temp = null
//   // reverve a single linked list
//   while (head) {
//     temp = head.next
//     head.next = newHead
//     newHead = head
//     head = temp
//   }
//   return newHead
// }

const reverseList = (head) => {
  return reverse(null,head)
}

const reverve = (newHead,head) => {
  if(head === null) return newHead
  let temp = head.next
  head.next = reverve(newHead,temp)
  return head
}

// console.log(reverseList(1->2->3))