
// double loop
const removeNthFromEnd = (head,n) => {
  let newLinkedList = new ListNode(0)
  newLinkedList.next = head

  // Initialise a variable to calculate the size of the list and transverse the list
  let linkedListTraverser = head
  let size = 0

  // traverse the list to establish it size
  while(linkedListTraverser !== null){
    linkedListTraverser = linkedListTraverser.next
    size++
  }

  linkedListTraverser = newLinkedList

  for(let i = 0; i < size - n; i++) linkedListTraverser = linkedListTraverser.next

  linkedListTraverser.next = linkedListTraverser.next.next

  return newLinkedList.next
}