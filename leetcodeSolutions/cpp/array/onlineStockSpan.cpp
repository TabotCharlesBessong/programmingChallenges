

class StockSpanner {
    vector<int> _span;
    vector<int> _prices;
public:
    StockSpanner() {
        
    }
    
    int next(int price) {
        int idx = _prices.size() - 1;
        while(idx >= 0 && _prices[idx] <= price){
            int span = _span[idx];
            idx = idx - span;
        }
        _prices.push_back(price);
        int span = _prices.size() - 1 - idx;
        _span.push_back(span);
        return span;
    }
};
