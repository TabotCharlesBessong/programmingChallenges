
// Using a set
const lengthOfLongestSubstring = (s) => {
  // Initialising a set to store the longest substring
  let longestStringLength = 0

  // loop through the provided string
  for (let i = 0; i < s.length; i++){
    let currentString = new Set()

    // Loop through the letters from the current point
    for (let x = i;x < s.length ; x++){
      // check if the current letter exist in the current set
      if(currentString.has(s[x])) break
      else currentString.add(s[x])
    }
    longestStringLength = Math.max(longestStringLength,currentString.size)
  }
  return longestStringLength
}

console.log(lengthOfLongestSubstring('abcdabcabcabcdef'))