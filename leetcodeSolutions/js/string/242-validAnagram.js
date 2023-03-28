
const isAnagram = (s,t) => {
  const count = {}
  for(let char of s){
    if(!(count[char])){
      count[char] = 0
    }
    count[char]++
  }
  for(let char of t){
    if(count[char] === undefined){
      return false
    }else{
      count[char]--
    }
  }
  for(let char in count){
    if(count[char] !== 0) return false
  }
  return true
}