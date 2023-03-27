

const hammingWeight = (n) => {
  let count = 0
  let arr = n.toString(2)
  for(let x of arr){
    if(x==='1') count++
  }
  return count
}

const s = 10001101
const t = s.toString()
// console.log(t,"\n",typeof(t),"\n",typeof(s))
console.log(hammingWeight(00000000000000000000000000001011))