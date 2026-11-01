const user={
    username:"abhi",
    price:1000,

    welcomeMessage:function() {console.log(`hii welome to my website ${this.username}`); /*this--> used for object only in this way*/   console.log(this)
    }// 'this'  used for current value(context)
   

}
user.welcomeMessage()

//Arrow function

const kutta = function() { return console.log(this)}   //normal function
console.log(kutta()); //takes this from inbuild materials so gives manyy values 
console.log("\n")
const kuta= () => {return console.log(this)}  //arrow function

console.log(kuta());//takes this from surrounding hence gives {}

const add=(num1,num2) => ({username:"rohan"})//no return statement required(implicit return)
console.log(add(3,5)) 

