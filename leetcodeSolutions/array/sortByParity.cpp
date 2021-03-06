

class Solution {
public:
    vector<int> sortArrayByParity(vector<int>& nums) {
        int l = 0,r= nums.size() -1;
        while(l<r){
            while(l<r && nums[l]%2==0)
                l++;
            while(l<r && nums[r]%2==1)
                r--;
            int temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
        }
        return nums;
    }
};