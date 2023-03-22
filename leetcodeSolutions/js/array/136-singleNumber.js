
const singleNumber = (nums) => {
  let map = new Map()
  for (let n of nums){
    map.set(n,map.get(n) + 1 || 1)
    // first time it meets a certain number, it will assign 1 to it.
    // The second time, it will add 1 + 1 to make 2 and 3 if the same number is met and so on
    // console.log(map.get(n))
  }
  for (let num of map){
    if(num[1] === 1){
      // So once a number second part gives only 1, it will console out the value indicating that it is supposed to appear just once
      return num[0]
    }
  }
}

console.log(singleNumber([2,2,4,4,4,5,1,1]))
