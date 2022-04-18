

const sumOfTwoSmallestNummer = (nummer)=>{
  const [fNummer , lnummer] =  nummer.sort((a,b) => a - b )
  return fNummer + lnummer
}


const sumOfTwoLargestNummer2 = (nummer)=>{
  const [fNummer , lnummer] =  nummer.sort((b,a) => a - b )
  return fNummer + lnummer
}

const sumOfTwoSmallestNummer1 = (nummer)=>{
  let min = Number.MAX_SAFE_INTEGER
  let secMin = Number.MAX_SAFE_INTEGER

  let n 
  for(let i = 0 ; i < nummer.length ; i++){
    n = nummer[i]
    if(n < min){
      secMin = min
      min = n 
    }else if(n < secMin){
      secMin = n 
    }
  }
  return min + secMin
}

const num = [1,5,2,8,3,5,9]

console.log(sumOfTwoSmallestNummer(num))
console.log(sumOfTwoSmallestNummer1(num))
console.log(sumOfTwoSmallestNummer2(num))