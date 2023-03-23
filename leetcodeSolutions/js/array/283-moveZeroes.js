

const swap = (arr,i,j) =>{
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const moveZeroes = (nums) => {
  const len = nums.length
  let lastZeroIndex = -1
  for (let i = 0; i < len; i++){
    if(nums[i] === 0 && lastZeroIndex === -1) lastZeroIndex = i
    else if (nums[i] !== 0 && lastZeroIndex !== -1){
      swap(nums,i,lastZeroIndex)
      lastZeroIndex +=1
    }
  }
}

console.log(moveZeroes([0,1,0,3,12]))