
const merge = (nums1,m,nums2,n)=>{
  // initializa pointers at the starting point of each of the arrays
  let i = 0
  let j = 0

  // Initialize the array that will contain the merged values
  const result = []

  // Iterate over the input arrays until one of them is empty
  while (i < m && j < n){
    // for eacher pointer position, add value from the smallest of the 2 array
    if(nums1[i] < nums2[j]){
      result.push(nums1[i])
      i++
    }else{
      result.push(nums2[j])
      j++
    }
  }

  // add any remaining element from nums1 to the merged array
  while(i<m){
    result.push(nums1[i])
    i++
  }

  // Add any remaining elements from nums 2 to the merged array
  while(j<n){
    result.push(nums2[j])
    j++
  }

  // copy the results back into nums 1 or nums2
  for (let k = 0; k < m + n; k++){
    nums1[k] = result[k]
  }
}

const nums1 = [1, 2, 3, 0, 0, 0]; // Sorted array with additional space for merging
const m = 3; // Number of elements in nums1

const nums2 = [2, 5, 6]; // Sorted array
const n = 3; // Number of elements in nums2

merge(nums1, m, nums2, n);

console.log(nums1);