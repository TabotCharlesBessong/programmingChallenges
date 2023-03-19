

class Solution {
public:
    bool canBeEqual(vector<int>& target, vector<int>& arr) {
        unordered_map<int , int> _map;
        for(int t : target){
            if(_map.find(t) != _map.end())
                _map[t] +=1;
            else
                _map.insert({t,1});
        }
        for(int a : arr){
            if(_map.find(a) != _map.end() && _map[a] > 0)
                _map[a] -=1;
            else
                return false;
        }
        return true;
    }
};