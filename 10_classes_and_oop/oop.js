const user = {
    username: "Naman",
    loginCount:55 ,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got User Details From DataBase.");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username);
console.log(user.getUserDetails());

console.log(this);


// const user2 = {
//     username: "Naman",
//     loginCount:55 ,
//     signedIn : true,

//     getUserDetails: function(){
//         console.log("Got User Details From DataBase.");
//         console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }

// const promsieOne = new Promise()
// const date = new Date()

function User(username, loginCount , isLoggedIn ){
    this.username = username
    this.loginCount= loginCount
    this.isLoggedIn =isLoggedIn
this.greetings = function(){
    console.log(`Welcome ${this.username}`);
}
    return this
}

const userOne =new  User("Naman",12,true)
const userTwo =  new User("Lattim",4,false)
console.log(userOne.constructor);
console.log(userTwo.constructor);
// new se naya instance/object create hota hai
//'new' keyword ki wajah se ek naya constructor function call hota hai  jisme kaafi arguments enter hote hai
//'this' keyword se sab arguments usme inject ho jaate hai