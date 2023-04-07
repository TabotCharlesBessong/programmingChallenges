
// this problem is similar to the dynamic problem of how sum. The only difference here is the fact that we get only 2 numbers that can sum up to the targeted element

// Nested loop approach
// const twoSum = (nums,target) => {
//   for (let i = 0;i <nums.length; i++ ){
//     // Determine the complement (required number) for the current number
//     const complement = target - nums[i]

//     // Loop through the array again
//     for (let x = 0;x < nums.length ; x++){
//       // Check if the current number is the first number's complement
//       if (x !== i && nums[x] === complement){
//         // Return both numbers
//         return [i,x]
//       }
//     }
//   }
// }


// Mapping method
const twoSum =  (nums, target) => {
  // Initialise a map to store the first run of numbers
  const mapOfNumbers = new Map();

  // Loop through the numbers
  for (let i = 0; i < nums.length; i++) {
    // Determine the complement (required number) for the current number
    const complement = target - nums[i];

    // Check if the complement exists in the Map
    if (mapOfNumbers.has(complement)) {
        return [mapOfNumbers.get(complement), i];
    }

      // If not, add the current number to the Map
    mapOfNumbers.set(nums[i], i);
  }
};

console.log(twoSum([1,2,2,3],4))