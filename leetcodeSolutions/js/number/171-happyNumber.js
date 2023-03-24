
const getNum = (char) => {
  const start = 'A'.charCodeAt(0) - 1
  return char.charCodeAt(0) - start
}

const titleNumber = (s) => {
  let res = 0
  let num = 0
  const len = s.length
  for(let i = 0; i < len; i++){
    num = getNum(s[len - 1 -i])
    res += Math.pow(26,i) * num
  }
  return res
}

const s = 'AZ'
// console.log(getNum(s[3-1-2]))
console.log(titleNumber(s))