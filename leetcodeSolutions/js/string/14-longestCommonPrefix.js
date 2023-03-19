
// Double loop
// const longestCommonPrefix = (string) => {
//   // return early on empty input
//   if(!string.length) return ''
//   // Loop through the letters of the
//   for (let i = 0; i <= string[0].length;i++){
//     // Loop through the other strings
//     for (let j =1; j < string.length ; j++){
//       // check if the character is also present in the same location
//       if (string[0][i] !== string[j][i]){
//         // if not, return the string up to and including the previous x-ters
//         return string[0].slice(0,i)
//       }
//     }
//   }
// }

// Array.every method

const longestCommonPrefix = (string) => {
  // return early on empty input
  if(!string.length) return ''

  // Loop through all the letters of the first word
  for (let i = 0; i <= string[0].length; i++){
    // check if the same character is present in the same positions of every other stings
    if(!string.every((string) => string[i] === string[0][i])){
      // If not, return the string up to and including the letter which still do match
      return string.slice(0,i)
    }
  }
  return string[0]
}

console.log(longestCommonPrefix(['had','hat','harp']))