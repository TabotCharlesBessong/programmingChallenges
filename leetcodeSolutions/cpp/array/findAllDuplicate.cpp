
// impotant property of this problem is the fact that all numbers are positive and the maximum value is the size of the array 
// Uisng a set would have made alot  of sense for this particuler probleme however , the question specifaction deprive us of that possibility 
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
       vector<int> result;
       // we are basically moving from one index  to another making the mavlue represented in that index negative , i.e if we have our value of 5 we go to index 4 and make it negative 
       // when we go to an index that has already been made negative , this means that we have already passed that vakue so it is a duplicate 
        for(int n : nums){
            // now since we are making values negative , we need to make sue of their absolute values 
            n = abs(n);
            if(nums[n-1]>0)
                nums[n-1] *=-1;
            else 
            // in that occasion , we add it to our result
                result.push_back(n);
        }
        return result;
    }
};