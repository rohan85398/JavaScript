const obj1={name:{puranaam:{first_name:"Kushagra " ,mid_name:"kumar",last_name:"Tripathi"}},age:20,weight:76,sex:"male"}
const obj2=Object()
obj2.name="Rohan"
obj2.age=25
obj2.weight=73
obj2.income=7000000
//console.log(obj1.name.puranaam);
const {sex:S}=obj1 // destructuring of object
console.log(S)


obj1.wanna=obj2
console.log(obj1);
console.log(obj1.wanna.weight)

// console.log(obj1.wanna?.sex)    //  ?----> this is used when we have to fnd if element before this if exists then

// console.log(Object.keys(obj1));//array milta hai
// console.log(Object.values(obj1));
// const {age:umr}=obj1
// console.log(umr);

const o1={a:1,b:2,c:3}
const o2={d:4,e:5,f:6}
const obj4=Object.assign(o1,o2)
const o3={...o1,...o2}
console.log(o3)
console.log(obj4)