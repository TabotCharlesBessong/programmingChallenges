
const happyNumber = (n) => {
  let set = new Set()
  while(!set.has(n)){
    set.add(n)
    let arr = n.toString()
    let squareSum = 0
    for(let i =0; i < arr.length; i++){
      squareSum += Math.pow(+arr[i],2)
    }
    if (squareSum === 1) return true
    n = squareSum
  }
  return false
}

console.log(happyNumber(82))

