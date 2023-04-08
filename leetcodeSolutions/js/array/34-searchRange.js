
const searchRange = (nums,target) => {
  // finding the first and last position of an element in an array
  let left = 0
  let right = nums.length - 1
  let output = [-1,-1]

  // binary search for the first position of the element element
  while (left < right) {
    let middle = Math.floor((left + right) / 2)

    if(nums[middle] < target) {
      left = middle + 1
    }else{
      right = middle
    }
  }

  if(nums[left] != target) return output

  output[0] = left

  // reset the right pointer
  right = nums.length - 1

  // binary search for the element right part
  while (left < right) {
    let middle = Math.floor((left + right) / 2) + 1

    if(nums[middle] < target) {
      left = 1
    }else{
      right = middle - 1
    }
  }

  output[1] = right

  return output
}

console.log(searchRange([5,7,7,8,7,8,10]),8)