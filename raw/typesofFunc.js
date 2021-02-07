//function statement
// function a(){
//     console.log("I am A");
// }
// function a(){
//     console.log("I am Fake A");
// }
// a();
// functions are treated aas first class citizens
// functions are treated as variables
function a(varName){
    console.log("hello", varName());
      
}
//hositing -> whose allocation is not there mark variable -> undefined, function -> memory allocate
// a(13);
// a(true);
// a([1,2,3,4]);
// a({name: "khushi"});
// in all above calling the parameters are passing as a reference 
a(function inner(){
    console.log("I am inner fn");
});
// in above a=calling the inner function is also pasiing as parameter so we can say that function can be treated as variable
function b(varName){
    console.log("hello", varName());
      
}
b(function inner(){
    console.log("I am inner fn");
    return 10;
});

let ori = [10,20,30];
let copy = ori;
console.log(copy);

//function expression
let fnRef = function(){
    console.log("I am fn Expression");
}
fnRef();
let fnR = function(){
    console.log("I am fn Expression");
}
fnR();

// let a = function(){
//     console.log("I am A");
// }
// let a = function(){
//     console.log("I am Fake A");
// }
// a();
// above function creates error 

// IIFEE -> immediate invoked function expression

(function iwillBeInvoked(){
console.log("I am IIFEE");
})();



