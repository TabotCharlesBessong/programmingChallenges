
/**
 * @param {number} n - a 32-bit unsigned integer
 * @return {number} - a 32-bit unsigned integer representing the reversed bits
 */
var reverseBits = function (n) {
  // var s = "";
  var count = 0;
  var index = 31;
  while (n > 0) {
    if (n % 2 !== 0) count += Math.pow(2, index);
    index--;
    n = Math.floor(n / 2);
  }
  return count;
};

console.log(reverseBits(1101));