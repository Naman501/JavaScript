const score = 400

const balance = new Number(100)
console.log(balance)
Number(100)
console.log(score)

console.log(balance.toString().length);

console.log(balance.toFixed(3));

const otherNumber = 123.756789

console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++ MATHS +++++++++++++

console.log(Math.abs(-6));

console.log(Math.round(222.2234));

console.log(Math.ceil(3.3));

console.log(Math.floor(-3.3));

console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

console.log((Math.floor(Math.random() * [max - min +1])));