class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
      vector<vector<int>>res;
      int n = nums.size();
      if(n<4)
        res;
      
      sort(nums.begin(),nums.end());
      
      for(int i = 0;i<n;i++){
        for(int j = i+1;j<n;j++){
          int target2 = target - nums[i] - nums[j];
          
          int left = j+ 1;
          int right = n-1;
          while(left<right){
            int curSum = nums[left] + nums[right];
            if(curSum < target2)
              left++;
            else if(curSum > target2)
              right--;
            else{
              vector<int>quadrup(4);
              quadrup = {nums[i],nums[j],nums[left],nums[right]};
              res.push_back(quadrup);
              
              // skip duplicate
              
              while(left < right && nums[left] == quadrup[2])
                left++;
              while(left < right && nums[right] == quadrup[3])
                right--;
            }
          }
          while(j+1 < n && nums[j+1] == nums[j])
            j++;
        }
        while(i+1 < n && nums[i+1] == nums[i])
            i++;
      }
      return res;
    }
};
