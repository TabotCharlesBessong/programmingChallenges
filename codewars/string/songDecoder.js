// [WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBWUBMYWUBFRIENDS] -> input
// [WEARETHECHAMPIONSMYFRIENDS] -> output

// we will use string manipulation and string regular expressions
const songDecoder = (dummy)=>{
  console.log(dummy.replace(/(WUB)+/g,' ').trim())
}

// using the filter method and not regular expressions 
const songDecoder1 = (dummy)=>{
  console.log(dummy.split('WUB').filter(Boolean).join(' '))
} 

// This is another way of doing the filter method 
// Boolean is the easiest way of doing this 
const songDecoder2 = (dummy)=>{
  console.log(dummy.split('WUB').filter(x => x !== '').join(' '))
} 

// There could be a longer way of doing this and a less efficient way 

const songDecoder3 = (dummy)=>{
  let str =''
  for(let i = 0; i < dummy.length;i++){
    if((dummy[i] === 'W' && dummy[i+1] === 'U' && dummy[i+2] === 'B' )
    || (dummy[i-1] === 'W' && dummy[i] === 'U' && dummy[i+1] === 'B' )
    || 
    (dummy[i-2] === 'W' && dummy[i-1] === 'U' && dummy[i] === 'B' )
    ){
      // if the value at that particular index is an either a w or a u or a b string , then we replace it with an empty vlaue
      str += str[str.length-1] !== ' ' ? ' ' : ''
    }else{
      str += dummy[i]
    }
  }
  // we finally trim it to remove empty space 
  console.log(str.trim())
}

songDecoder("WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDS")
songDecoder1("WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDS")
songDecoder2("WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBWUBFRIENDS")
songDecoder3("WUBWEWUBAREWUBTHEWUBCHAMPIONSWUBMYWUBWUBFRIENDS")