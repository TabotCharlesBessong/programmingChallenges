
const romanToInt = (string) => {
  const numerals = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  }

  const strlen = string.length
  let total = 0

  // Loop through the letters
  for (let i = 0; i < strlen; i++) {
    // Check if the current letter is followed by one with a higher value (indicating a deduction)
    if (i < strlen - 1 && numerals[string[i + 1]] > numerals[string[i]]) {
      // Remove the current letter's numeric value from the total
      total -= numerals[string[i]];
    } else {
      // Add the current letter's numeric value to the total
      total += numerals[string[i]];
    }
  }
  return total
}

console.log(romanToInt('LXIV'))