//array

const myArr = [0, 1, 2, 3, true, "Naman"] // re-size-able

console.log(myArr[5]);// shallow copy of 
//an object is a copy whose properties share the same refrence point

//deep copy do not share the same refrence point 

// array copy operations => shallow copies

const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,4,55)
console.log(myArr2[2]);

myArr.push(6)
console.log(myArr);

// myArr.pop("Naman")
// myArr.unshift(2009)
myArr.shift()
console.log(myArr);
console.log(myArr.includes("Naman"));
console.log(myArr.indexOf(true));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//slice AND splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log("B ",myArr);
const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C", myArr); // splice => includes last element also .slice doesn't. Moreover splice manipulates the original array.


