

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

function calculateCartPrice(val1,val2,...num1)// rest operator =>
{
return num1
}

console.log(calculateCartPrice(100,200,203,2000));




const user = {
    username:"Naman",
    price:200
}

const users ={
    username:"Animesh",
    price:2000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(users)
 
const myNewArray = [200,300,30000,4000]

function returnsecondValue(getArray){
    return getArray[3]
}

console.log(returnsecondValue(myNewArray));

console.log(returnsecondValue([100,200,300,400]));