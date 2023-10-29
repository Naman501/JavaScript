//#Primitive(call by value)
//7 types : String , Number , Boolean , NULL , undefined , Symbol , BigInt

//Reference(Non-Primitive)

// Array , Objects , Functions 

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.


// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.

const score = 100
const scoreValue = 100.2

const isLoggedIn = true
const outsideTemp = null
let userEmail;

// console.table("score","scoreValue","isLoggedIn","outsideTemp","userEmail");
console.log(typeof userEmail,outsideTemp,isLoggedIn);
console.log(typeof scoreValue);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 123431321n

console.log(typeof bigNumber);

const heros = [ "shaktiman","nagraj" ,"Rakshasi"]

let myObj = {
    name: "Naman",
    age:20
}

const myFunction = function(){
    console.log("Randi");
}

console.log(typeof heros)
console.log (typeof myFunction);
console.log(typeof myObj);