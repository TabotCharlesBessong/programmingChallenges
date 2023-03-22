
const isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g,'')
  s = s.toLowerCase()
  
  return s == s.split('').reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

let me = "A man, a plan, a canal: Panama"
me = me.replace(/[^a-zA-Z0-9]/g,'')
console.log(me)