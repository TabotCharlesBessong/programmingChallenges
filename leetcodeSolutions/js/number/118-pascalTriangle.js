
const generate = (numRows) => {
  let ret = [];
  
  for(let i = 0; i < numRows; i++)
  {
    ret[i] = [];
    ret[i][0] = ret[i][i] = 1;
    for(let j = 1; j < i; j++){
      ret[i][j] = ret[i-1][j] + ret[i-1][j-1]; 
    }
  }
  return ret;
};

console.log(generate(6))
