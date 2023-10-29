//dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023 , 0 ,23 , 5 , 4)

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

console.log(Math.floor(myTimeStamp/1000));

console.log(myCreatedDate.getFullYear());

