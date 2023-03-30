
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }
  return res;
}

// Sure! Here's a detailed explanation of how the code works:

// The function `threeSum` takes an array of integers as input and returns an array of arrays containing all unique triplets that sum up to zero.

// The first line of the function sorts the input array in ascending order using the `sort` method. This is done to make it easier to find pairs of numbers that sum up to a given value.

// The function then initializes an empty array called `res` that will be used to store the result.

// The next line starts a loop that goes through each element of the input array. The loop runs from the first element to the third-to-last element, since we need at least three elements to form a triplet.

// Inside the loop, we first check if the current element is a duplicate of the previous element. If it is, we skip over it using the `continue` statement.

// Next, we initialize two pointers called `l` and `r`. The pointer `l` starts at the element immediately following the current element, and the pointer `r` starts at the last element of the array.

// We then enter another loop that continues until `l` is greater than or equal to `r`. Inside this loop, we calculate the sum of the current element (`nums[i]`) and the elements pointed to by `l` and `r`.

// If this sum is equal to zero, we have found a triplet that sums up to zero. We add this triplet to our result array and then move both pointers inward by one position. We also skip over any duplicates using two more loops that move `l` and `r` past any elements that are equal to their previous values.

// If the sum is less than zero, we know that we need a larger value than `nums[l]`, so we move `l` one position to the right.

// If the sum is greater than zero, we know that we need a smaller value than `nums[r]`, so we move `r` one position to the left.

// Once all possible triplets have been found, we return our result array.

// I hope this helps! Let me know if you have any questions or if there's anything else I can do for you.