
// while loop aproach
const mergeTwoLists = (l1,l2)=>{
  // Initialise a new linkedList with a dummy ListNode
  let newList = new ListNode(0)

  // Maintain a reference to the head of the new LinkedList
  let headOfNewList = newList

  // Whilst both of the passed in lists contain more elements
  while(l1 !== null && l2 !== null){
    // If l1's value is smaller
    if (l1.val < l2.val){
      // Add l1's value to the new list
      newList.next = l1

      // Move l1 to its next element
      l1 = l1.next
    }else{
      // add l2's value to the new list
      newList.next = l2

      // Move l2 to its next element
      l2 = l2.next
    }

    // Move into the next level of the LinkedList for the next iteration in the linkedList
  }

  // If l1 has run out of elements
  if(l1 === null){
    // append l2 to the new list
    newList.next = l2
  }
  // If l2 has run out of elements
  else{
    //  Append l1 to the new List
    newList.next = l1
  }

  return headOfNewList.next
}

// Recursion Approach
const mergeTwoLists = (l1,l2) => {
  // If either list is empty, return the other list's node
  if(l1 == null) return l2
  if(l2 == null) return l1

  // if l1 is lower
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next,l2)
    return l1
  }else{
    l2.next = mergeTwoLists(l2.next,l1)
    return l2
  }
}