
const majorityElement = (nums) => {
  let map = {}
  let max = 0
  let majorNum = 0
  const len = nums.length
  for(let i = 0; i < len; i++) {
    if(!map[nums[i]]) map[nums[i]] = 0
    map[nums[i]]++
    if(map[nums[i]] > max) {
      majorNum = nums[i]
      max = map[nums[i]]
    }
  }
  return majorNum
}

console.log(majorityElement([2,2,1,1,1,2,2]))