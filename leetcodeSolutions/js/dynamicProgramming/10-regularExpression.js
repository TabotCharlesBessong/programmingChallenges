// recurssion method

function isMatch(str, pat) {
  return recursiveIsMatch(0, 0, str, pat);
}
function recursiveIsMatch(i, j, str, pat) {
  const inputStringLength = str.length;
  const patternLength = pat.length;

  // Reached the end of the pattern
  if (j == patternLength) {
    // Return whether or not we've also reached the end of the string (entire string has passed)
    return i == inputStringLength;
  }

  // If the current pattern character is followed by a * (is a wildcard)
  if (j + 1 < patternLength && pat.charAt(j + 1) == "*") {
    // Assume 0 matches of the current pattern character, move on to the next point in the pattern (after the asterisk)
    if (recursiveIsMatch(i, j + 2, str, pat)) return true;

    // Loop through the remaining characters, so long as they match by character (or .)
    while (
      i < inputStringLength &&
      (pat.charAt(j) == "." || str.charAt(i) == pat.charAt(j))
    ) {
      // Check the rest of the string (1 character forward), against the next point in the pattern (after the asterisk)
      if (recursiveIsMatch(++i, j + 2, str, pat)) return true;
    }
  }
  // If the current pattern character is not a wildcard, and matches the current string character
  else if (
    i < inputStringLength &&
    (pat.charAt(j) == "." || str.charAt(i) == pat.charAt(j))
  ) {
    // Move onto the next character, and the next character of the pattern
    return recursiveIsMatch(i + 1, j + 1, str, pat);
  }

  // String does not match current point in pattern
  return false;
}

// const isMatch = (s, p) => {
//   const rows = s.lenght;
//   const columns = s.lenght;

//   const dp = Array.from({ length: rows + 1 }, () => [false]);

//   dp[0][0] = true;

//   for (let i = 1; i < columns + 1; i++) {
//     if (p[i - 1] === "*") {
//       dp[0][i] = dp[0][i - 2];
//     }
//   }
// };

console.log(isMatch("aba", ".*"));
