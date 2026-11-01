const arrr=[12,33,45,65,22,7,98]
//for each
arrr.forEach((item,index,arr)=>{console.log([item,index,arr])}) //name of function is not given val is any parameter and can be any name
//forEach value return nhi krta h isliye variable k saath use nhi hota hai

function print(few){console.log(few)} 
//arr.forEach(print) // we are giving reference of function not executing it

//filter
const vle=arrr.filter((num)=>num>20)
const vlu=arrr.filter((num)=>{return num>30})
console.log(vlu);



const values=books.filter((nums)=>nums.genre==='History')