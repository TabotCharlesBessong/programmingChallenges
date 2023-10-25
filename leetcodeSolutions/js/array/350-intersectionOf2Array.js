const intersect = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      res.push(nums2[i]);
      nums1.splice(nums1.indexOf(nums2[i]), 1);
    }
  }
  return res;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4, 5]));
