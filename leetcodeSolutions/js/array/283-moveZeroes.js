

const swap = (arr,i,j) =>{
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const moveZeroes = (nums) => {
  const len = nums.length
  // since we are aiming to move the zeros to the end, we will make sure it's index is at -1 which is the last position in an array
  let lastZeroIndex = -1
  for (let i = 0; i < len; i++){
    if(nums[i] === 0 && lastZeroIndex === -1) lastZeroIndex = i
    else if (nums[i] !== 0 && lastZeroIndex !== -1){
      swap(nums,i,lastZeroIndex)
      lastZeroIndex +=1
    }
  }
  return nums
}

console.log(moveZeroes([0,1,0,3,12]))