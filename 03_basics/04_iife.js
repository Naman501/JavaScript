//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB connected`);  //named iife
}) (); // 2 iife likhne ke baad ';' lagana padta hai kyuki end batana padta hai
// chai()

// ()()
// global scope ke pollution se bachne ke liye

( (name) => {
    console.log(`DB connected two ${name}`); //normal iife
} ) (`Naman`);