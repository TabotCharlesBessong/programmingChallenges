
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
       if(nums.size()== 0)
           return 0;
        int sum_max = nums[0];
        int sum_including_current  = nums[0];
        
        for(int i = 1; i < nums.size() ;i++)
            // this variable helps us keep a number to be added next every time we loop through it
            int n = nums[i];
            // Here we are simply adding and making sure to compare oour values so has to always keep the maximum
            sum_including_current = max(sum_including_current + n , n);
            // this variable keeps the possible maximum value
            sum_max = max(sum_max, sum_including_current);
        }
        return sum_max;
    }
};