
// If statement
const isValid = (inputString) => {
  // Initialize an array to store the closing bracket
  let expectedBrackets = []

  // Loop through the letters in the input string
  for(let letter =0; letter < inputString.length; letter++) {
    // push the closing equivalent of any open bracket found
    if (inputString[letter] === '{'){
      expectedBrackets.push('}')
    }else if(inputString[letter] === '['){
      expectedBrackets.push(']')
    }else if(inputString[letter] === '('){
      expectedBrackets.push(')')
    }
    // If a close bracket is found,check that it matches in the last storage of the expectedBrackets
    else if(expectedBrackets.pop() !== inputString[letter]) return false
  }

  return !expectedBrackets.length
}

// const isValid =  (inputString)=> {
//   // Initialise an array to store the closing brackets expected
//   let expectedBrackets = [];

//   // Loop through the letters in the input string
//   for (let letter = 0; letter < inputString.length; letter++) {
//     switch (inputString[letter]) {
//       // Push the closing equivelant of any open brackets found
//       case '{': {
//         expectedBrackets.push('}');
//         break;
//       }
//       case '[': {
//         expectedBrackets.push(']');
//         break;
//       }
//       case '(': {
//         expectedBrackets.push(')');
//         break;
//       }
//       // If a close bracket is found, check that it matches the last stored open bracket
//       default: {
//         if (expectedBrackets.pop() !== inputString[letter]) {
//             return false;
//         }
//       }
//     }
//   }
//   return true
// }

const inputString = '({[]})[';
const result = isValid(inputString);
console.log(result); // Output: true