const userMail = []

if (userMail) {
    console.log("Got User Email");
} else{
    console.log("Don't have Email.");
}

//falsy values : false , 0 , -0 , BigInt 0n , "" , null , NaN , undefined

// truthy values : "0" , 'false' , " " , [] , {} , function(){} 

// false == 0      =>true
// false == ''     =>true
//0 == ''          =>true
if (userMail.length === 0) {
    console.log("Array is empty.");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("Object is empty.");
}

//  Nullish Coalescing Operator (??) : null   undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15
val1 = null ?? 10 ?? 77

console.log(val1);
  

// terinary operator ?
// condition ? true : false

const iceTeaPrice =100
 iceTeaPrice >=80 ? console.log("less than 80") : console.log("greater than 80");;