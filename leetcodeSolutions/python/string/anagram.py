
# hashbamap
# a solution with O(n) memory

def isAnagram(self,s:str,t:str) -> bool:
  if len(s) != len(t):
    return False
  countS, countT = {}, {}
  
  for i in range(len(s)):
    countS[s[i]] = 1 + countS.get(s[i],0)
    countS[t[i]] = 1 + countT.get(t[i],0)
  for c in countS:
    if countS[c] != countT[c]:
      return False
  
  return True

isAnagram(s='hello',t='ollhe')

# solution with O(1) memory space
def validAnagram(self,s:str,t:str) -> bool:
  return sorted(s) == sorted(t)