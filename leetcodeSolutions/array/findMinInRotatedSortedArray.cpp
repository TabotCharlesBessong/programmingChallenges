

class Solution {
    int search(vector<int>& nums, int l , int r){
        if(l == r) 
            return nums[l];
        int mid = l + (r-l)/2;
        if(nums[mid] > nums[r])
            return search(nums,mid+1,r);
        if(nums[mid] < nums[r])
            return search(nums,l,mid);
        return nums[r];
    }
public:
    int findMin(vector<int>& nums) {
        return search(nums,0,nums.size()-1);
    }
};