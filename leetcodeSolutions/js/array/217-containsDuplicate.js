const containsDuplicate = (nums) => {
  if (nums.length <= 1) return false;

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        return true;
      }
      j++;
    }
  }
  return false;
};

console.log(containsDuplicate([7, 1, 5, 3, 6, 4, 4, 9]));
