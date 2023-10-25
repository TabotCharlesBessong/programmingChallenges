const firstUniqChar = function (s) {
  let map = new Map();
  for (let x of s) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 0);
    }
  }
  console.log(map, "map");
  for (let [k, v] of map) {
    if (v === 0) {
      let val = s.indexOf(k);
      return val;
    }
  }
  return -1
};

console.log(firstUniqChar("loveleetcode"));
