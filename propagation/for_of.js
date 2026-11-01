const kus=new String("Adam gondwi")
for (const num of kus) {console.log(num);
    
}

//Maps    doesnt have duplicate values baaki dictionary hi hai
const map=new Map()
map.set('IN','india')
map.set('us','america')
map.set('jn','japan')
console.log(map)
for (const [key,value] of map) {console.log(key)
                                        
}//for of loop se maps iteratable hai object nhi  'for in' generally use hota hai objuect ke liye 

const obj={IN:'india',US:'america',JN:'japan'}
// for (const [key,value] of obj) {console.log(key)
    
// }

for (const key in obj) {
  console.log(`${key} is code for ${obj[key]}`)
    
}                               