

function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

sayMyName()

function addTwoNumbers(number1, number2){//parameters => while giving function definition
    console.log(    number1 + number2
        );
}
function add(num1 , num2){
    let result1 = num1 +num2
    return result1
    console.log("NAMAN");

}
addTwoNumbers(null,9) // arguments => while calling a functions  values are called arguments

const result= addTwoNumbers(5,6)
const result1= add(9,6)

console.log("Result : " , result1);

function loginUserMessage(username = "Sam"){
    if (username === undefined) {
        console.log("PLease Enter A Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("NAMAN"))
console.log(loginUserMessage())
