
const isPowerOfThree = (num) => {
  if (num === 1) {
    return true;
  } else if (num > 1 && num % 3 === 0) {
    return isPowerOfThree(num / 3);
  } else {
    return false;
  }
};

const x = 81;
console.log(isPowerOfThree(x));