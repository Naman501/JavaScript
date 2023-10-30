//singleton
//object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shantanu",
    "full name":"Shantanu Tripathi",
    age: 20,
    location:"Noida",
    [mySym]:"mykey1",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
}

myArray = ["h","i"]
console.log(JsUser.location);
console.log(JsUser["age"]);
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.age = "33"
console.log(JsUser.age);

// Object.freeze(JsUser)
JsUser.age = "111"
console.log(JsUser.age);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Bitch!");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Bitch ,${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());
