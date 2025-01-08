
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >=0 ; i--){
    if(digits[i] === 9) {
      // we convert the last digit to 0 so that we will have to increment the next digit
      digits[i] = 0
    }else{
      // if we had already dealt with all the digits at 9, we will simply need to increment the previous digit
      digits[i]++
      // since the last digit is not equal to 9, there is no need to make it to the next tenth, so we just increment
      return digits
    }
  }
  // 
  return [1,...digits]
}

console.log(plusOne([237]))