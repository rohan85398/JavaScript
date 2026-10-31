function rooh(){
    console.log("Vanshika");
    
}
rooh()

function naamlomera(naam="roshan")  //her roshan is default name
{return `mai kehna chahta hu ki mera naam ${naam} hai aur mai gaya ka niwashi hu`}
const naamlello=function (name){return `ye ek dusra tareequa h function ${name}represnt krne ka`} //but function ka naam h isliye isko bina declare kiye uske upar access nhi kr skte 

console.log(naamlello("Kushagra"))
console.log(naamlomera("Kushagra"))


//how to pass multiple values in function

function cartvalue(...num1){return num1}

console.log(cartvalue(400,200,100,20))

const kaddu={sex:"M",gender:"Male"}
console.log(randomtry(kaddu)) //yha hum function declaer krne k phle access kr paa rhe h
//par agar usko variable me store kr de to nhi kr paaenge 



function randomtry(kuchbhilo){
    console.log(`ab baat ho rhi h to mera sex ${kuchbhilo.sex} aur gender ${kuchbhilo.gender} bhi print kr do`)
}




