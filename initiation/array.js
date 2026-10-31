const arr=[1,2,5,6,88,9]
//JS creates shallow copy(by reference)
const arr2=new Array(2,5,6,8,9)
//console.log(arr2);
//console.table([arr,arr2]);
arr.push(7);
//console.log(arr);

arr.pop()
// console.log(arr);
// console.log(arr.includes(9));
// console.log(arr.indexOf(9));



//slice and splice differences
const vsk=[2,5,8,9,7,5,6,3]
//console.log(vsk);

const k=vsk.slice(1,4)
//console.log("ye jo array hai na wo ye wla hai",vsk)
//console.log(k);


const a=vsk.splice(1,4)
//console.log("B",vsk)
//console.log(a)

//slice original array ko as it is rhne deta h but splice main array ko change kr deta hai

const rs=vsk.concat(a)  //concat me repetition of elements nhi hota hai
//console.log(rs)
const r=[...arr,...arr2,...vsk]//spread operator use to opereate like concat for multiple arrays
//console.log(r);


let s=152
let d=696
let f=365
const str=new String("kushagra kumar")
 
//console.log(Array.of(s,d,f));
//console.log(Array.from(str))
const pie= [1,2,3,[5,3,6,9],[7,8,5,[9,8,56,23,[31,24,56]]]]
console.log(pie.flat(Infinity));
