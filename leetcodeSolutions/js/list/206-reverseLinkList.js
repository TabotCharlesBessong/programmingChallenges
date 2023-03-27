const reverseList = (n) => {
  let prev = null, curr = head, next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

const reorderList = (head) => {
  if(!head) return null

  // point head to the rest of the list removed
  head.next = reverseList(head.next)

  reorderList(head.next)
}