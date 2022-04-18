
// [[18,20],[45,2],[63,32],[37,6],[21,21],[78,9]]
// > 7 && > 55
// [open,open,senior,open,open,senior]

// Here the maping function only was used
const openOrSernior = (data)=>{
  return (data.map((info)=> {
    if(info[0]>= 55 && info[1]>= 7){
      console.log("Senior")
    }else{
      console.log("Open")
       
    }
  }))
}

// In this method , we use the array destructuring  combined with a ternary operators 

const openOrSernior1 = (data1)=>{
  console.log(data1.map(([age,handicap]) => (age >= 55 && handicap>= 7 ) ? 'Senior' : 'Open'  ))
}

openOrSernior( [[18,20],[45,2],[63,32],[37,6],[21,21],[78,9]])
console.log("\n\n");
openOrSernior1( [[18,20],[45,2],[63,32],[37,6],[21,21],[78,9]])