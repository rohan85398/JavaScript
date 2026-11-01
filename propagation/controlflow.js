//loops
// if (condition) {     // ===(strict equal) it also checks datatype as'2'== 2 is true but'2'===2 is false 
    
// }


switch (5) {
    case 2:console.log("yeah");
    
        
        break;
    case 3:console.log("yeah its 3");
        
        break;
    case 5:console.log("yeah its 5");
        
        break;
    default:console.log("yeah its 6");
        break;
}

const name="hh"
if(name){console.log("got name")}
else{console.log("not got any")}



// //falsy values     except these everything is truthy
// false,0,-0,BigInt On,"",null,undefined,NaN

// //truthy value
// '0','false'," ",[],{},function(){}

//checking empty object
const emptyobj={}
if (Object.keys(emptyobj).length === 0) {console.log("empty hai sasur");
    
}                      

//Nullish coalescing operator(??): null undefined
let val1;
val1=5 ?? 11
console.log(val1)
val1=null??10      //null nhi aaya yha pe uske badle 10 aa gya ye null aur undefined k liye bna h 
console.log(val1);


//terniary operator
//  condition ? true :false
const lassi=50
lassi>30? console.log("greater than 30") : console.log("less than 30")

