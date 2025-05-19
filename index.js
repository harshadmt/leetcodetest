function strings (str){
  let b = str.split(',')
 let a = b.reduce((a,b)=>a*b)
return a ;
}

let str = "3,4"

console.log(strings(str));




