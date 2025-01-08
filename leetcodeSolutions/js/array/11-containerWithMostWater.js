
// Loop
// const maxArea = (height) => {
//   let biggestFoundArea = 0

//   // loop through every column
//   for (let i = 0; i < height.length; i++){
//     // for each column, loop through the remaining column
//     for (let j = i; j < height.length; j++){
//       // set the maximum height of the current area
//       const maxHeight = Math.min(height[i] , height[j])

//       // calculate the maximum area
//       const currentArea = maxHeight * (j - i)

//       // update the biggest area
//       biggestFoundArea = Math.max(biggestFoundArea,currentArea)
//     }
//   }
//   return biggestFoundArea
// }

const maxArea =  (height) => {
  let biggestFoundArea = 0;
  let left = 0;
  let right = height.length - 1;

  // Run until the left and right markers meet
  while (left < right) {
    // Set the maximum height of the current area
    // we can't use Math.max because they will be an outbound
    const maxHeight = Math.min(height[left], height[right]);

    // Calculate the current area
    const currentArea = maxHeight * (right - left);

    // Update the biggest found area
    biggestFoundArea = Math.max(biggestFoundArea, currentArea);

    // Move the left or right marker inwards (whichever is smaller)
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return biggestFoundArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))