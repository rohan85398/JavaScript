//IIFE(Immediately Invoked Function Expressions)
//global scope ke pollution sse bachne ke liye use krte hai
//name of function is oprtional in IIFE

 (function tmn(){
    console.log(`kushagra`);
    
})();

((name)=>{console.log(`fuck off ${name}`);})('kartik');

