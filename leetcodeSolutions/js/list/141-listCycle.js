
const hasCycle = (head) => {
  if(!head) return false

  let front = head
  let rare = head
  while(front){
    if(!front.next) return false
    else{
      front = front.next.next
      rare = rare.next
    }
    if(rare === front) return true
    // we will keep looping while there is a front.next until we get to a situation where rare === front
  }
  return false
}