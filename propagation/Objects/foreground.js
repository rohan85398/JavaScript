//declaratiion

const symb=Symbol("vsk")
const obj={
    name:"kushagra"
    ,Sex:"male",
    ht:182,
    weight:76,
    age:20,
    [symb]:"kus",//for using it as symbol in obj

}
obj.age=19;
Object.freeze(obj)
obj.age=16
console.log(obj.name);
console.log(obj["age"]);//bts index bhi string hi hai
console.log(typeof obj[symb]);
console.log(obj);


// const gotra=Symbol("vats")

// const ush={
//     name: "abhi",
//     age: 19,
//     body_weight: 79,
//     caste:"brahmin"
//     ,gotra:[gotra]

// }
// console.log(ush);