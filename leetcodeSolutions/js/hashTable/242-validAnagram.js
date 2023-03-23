
const isAnagram = (s,t) => {
  const lenA = s.length
  const lenB = t.length
  const map = Array(26)
  let index = 0
  const base = 'a'.charCodeAt(0)

  if(lenA !== lenB) return false

  for (let i = 0; i < lenA; i++){
    // getting specific index in that map that will have some values that will be added to it and used to match or compare to the other string
    index = s[i].charCodeAt(0) - base
    if (!map[index]) map[index] = 0
    map[index]++
  }

  for (let j = 0; j < lenB; j++){
    index = t[j].charCodeAt(0) - base
    if(!map[index]) return false
    map[index]--
  }

  return true
}

console.log(isAnagram('anagram','gramana'))
