const j=856.235
//console.log(j.toFixed(2));//number of digits after decimal
//console.log(j.toPrecision(4));
const k=Number.EPSILON
//console.log(k);



// console.log(Math.abs(-4));
//console.log(Math.ceil(-4.7));
//console.log(Math.floor(-5.9));
//console.log(Math.sqrt(-5.9));
//console.log(Math.max(-5,2 ,6,8,8.9,-8.99));
//console.log(Math.min(1.0,1.5,-3.2,-1.36,-3.2000001,9));



//console.log(Math.random()*100);//value always belongs to (0,1) so multiplying we get different ranges also 

const mn=50
const mx=90


//console.log(Math.floor((Math.random()*(mx-mn+1))+mn)) 

//hum mn add kr rhe h kyuki hm chahte h min value itna to aaye hi 

const samay=new Date();
// console.log(samay.toDateString());
// console.log(samay.toISOString());
// console.log(samay.toJSON());
// console.log(samay.toString());
// console.log(samay.toLocaleDateString());
// console.log(samay.toTimeString());
// console.log(samay.toUTCString());
// console.log(samay.getTimezoneOffset());

const mainsamay=new Date();
mainsamay.toLocaleString("hi-IN",{weekday: "long"})
console.log(mainsamay);


