
const removeDuplicates = (nums) => {
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


// const removeDuplicates =  (nums) => {
//   let uniqueCursor = 1;
  
// 	// Loop through the array of number
// 	for (let i = 1; i < nums.length; i++) {
//     // Find unique values
// 		if (nums[i] !== nums[i - 1]) {
//       // Move unique values to follow the last unique value found
// 			nums[uniqueCursor] = nums[i];
      
// 			// Move the unique value cursor onward
// 			uniqueCursor++;
// 		}
// 	}
  
// 	//nums.length = uniqueCursor; // Chop the surplus values - not needed for LC submission
// 	return uniqueCursor;
// };
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))