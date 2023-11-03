//if

const isUserLoggedIn = true
const temperature = 41

if (3 != 2) {
                  console.log("Maa-chuda");              //>,<,>=,<=,==,===
}
// console.log("abcd");

if(temperature === 50){
    console.log("less than 50.");
}
else{
    console.log("temperature is grater than 50");
}



if(7>5){
    console.log("Deepak Chutiya hai!");
}
const score =200

if (score > 100) {
    var power = "fly"
    console.log(`Use power : ${power}`);// var ka scope global hota hai
}
console.log(`User power : ${power}`)

const balance = 1000

if(balance > 500) console.log("test"); //implicit scope

if(balance > 500) console.log("test1"),
console.log("test2");                    // aisa nahi karna hai. not a good practice

if (balance < 600 ){
    console.log("less than 600");
} else if (balance < 750){
    console.log("less than 750");
}else {
    console.log("less than 1200");
}

const  userLoggedIn  = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course");
}


 

if (LoggedInFromEmail || LoggedInFromGoogle) {
    console.log("User Logged In!");
}