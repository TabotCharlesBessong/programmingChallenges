
const removeDuplicate = (nums) => {
  let i = 0
  while(i<nums.length-1){
    let j=i+1
    if(nums[i] === nums[j]){
      nums.splice(j,1)
    }else{
      i++
    }
  }
  return nums
}

console.log(removeDuplicate([2,4,4,6,1,1,7,4,9,9,9,6]))