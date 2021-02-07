//var declare
//default value -> undefined
//code execution top->bottom , left->right
console.log("Hello IP");
//primitive types-> undefined, numbers, string, boolean, null;
//dynamically typed ->python (type is not defined before declaration)
//statically typed -> c++, c 
let a;
a = 10;
console.log("Hello IP");
//int a;
console.log(a);
a= 10.1;
a = "string"; // here type of a is dynamically assigning a string
a = 'string quote string';
a = true;
console.log(a);

//non primitive -> types that are made of primitives
// functions, arrays, objects
function fn(varName){
    console.log("Hello from fn", varName);
     return "hello Now I am returning the string";
}
fn("Hello")
fn(10)
fn(["hello", "How"])
let rval = fn(10);
console.log(rval);//undefined because fn named function does not return anything
let rVal = fn(10);
console.log(rVal);//if fn is returning something then it is not undefined

//array is a collection of homogenous data types (in c++)
//but here array is collection of anything
// js-> syntax is matched with java
let arr = [
    1,
    1.1,
    true,
    null,
    "string",
    [1,2,3,4,5,5],
    function fn(){
        console.log("Line 41","hello from arr");
        return "Hi from arr";
    },
    {
        name: "Hello"
    }


];
console.log(arr);
console.log("arr[4]",arr[4]);//to print "string"
console.log("arr[5][2]",arr[5][2]);//to print third element of [1,2,3,4,5,6]

console.log(arr[6]);//nothing is print because at that index a function is there and without function calling nothing is required
console.log(arr[6]+"");//now whole body gets print
console.log("Line 53",arr[6]());
console.log(arr[95])// undefined
//it will print
//line 41 hello from arr
//line 53 hi from Arr

//javascript is a multiparadigm -> supports oops, functional programmming , procedural programming

// object is collection of key value pair
let object ={
    name:"khushi",
    lastname:"singh",
    movies: ["civil war", "Avengers"],
    isAvenger: true,
    address: {
        city: "delhi",
        state: "delhi"
    }

}
console.log(object.isAvenger);
console.log(object.movies);
console.log(object.movies[1]);
console.log(object.address.state);
let prop = "lastname";
console.log(object[prop]);

// get
object.isAvenger=false;
 object.movies.push("first Avenger");
// set/update
 object.friends=["tony", "bruce", "peter"];
console.log(object);

//delete
delete object.lastname;
console.log(object);

//for loop
for(let kei in object){
    console.log("key: " + kei+ " "+ "value"+object[kei]);

}

// for loop
for(let i=0; i<arr.length; i++){
    console.log(i, " : ", arr[i]);
}

//in object 
// addlast-> push
// removelast-> pop
// addfirst-> unshift
// removefirst->shift










