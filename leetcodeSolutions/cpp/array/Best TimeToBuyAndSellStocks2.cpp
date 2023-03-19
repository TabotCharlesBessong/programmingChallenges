

class Solution {
public:
    int maxProfit(vector<int>& prices) {
       if(prices.size() <=1)
           return 0;
        // we declare a value at the start 
        int buy = prices[0];

        int profit = 0;
        for(int i =1;i<prices.size();i++){
            // this will enable us to have a profit of zero if the innitial price was originally higher
            if(prices[i] < prices[i-1]){
                // this line of code will enable us update our prifit everytime we have a value(price) that is smaller than the innitial price (i-1)
                profit +=prices[i-1] - buy;
                buy = prices[i];
            }
        }
        // here we are to make sure that at our last index , we always get a profit if the innitial value was smaller , this is made possible because we are updating the buy variable 
        profit += prices[prices.size()-1] - buy;
        return profit ;


    }
};