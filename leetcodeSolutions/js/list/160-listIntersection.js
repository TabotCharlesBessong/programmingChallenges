
// const getIntersectionNode = (headA,headB) => {
//   const lenA = lengthOfLinkList(headA)
//   const lenB = lengthOfLinkList(headB)

//   let pA = forwardPointer(headA,lenA - Math.min(lenA,lenB))
//   let pB = forwardPointer(headB,lenA - Math.min(lenA,lenB))

//   while (pA !== pB) {
//     pA = pA.next
//     pB = pB.next
//   }
//   return pA
// }

// const lengthOfLinkList = (head) => {
//   let len = 0;
//   let p = head;
//   while (p) {
//     len++;
//     p = p.next;
//   }
//   return len;
// }

// const forwardPointer = (head,distance) => {
//   let p = head;
//   for (let forwardStep = 0; forwardStep < distance; forwardStep++) {
//     p = p.next;
//   }
//   return p;
// }

const getLen = (head) => {
  let len = 0
  while(head){
    len++
    head = head.next
  }
  return len
}

const getIntersectionNode = (headA,headB) => {
  const lenA = getLen(headA)
  const lenB = getLen(headB)
  let diff = Math.abs(lenA - lenB)

  if(lenA > lenB){
    while(diff--) headA = headA.next
  }else{
    while(diff--) headB = headB.next
  }
  while(headA !== headB){
    headA = headA.next
    headB = headB.next
  }
  return headA
}