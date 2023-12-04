const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);



// console.log(Math.PI);
// Math.PI=6
// console.log(Math.PI);

// const mynewObject = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai nahi bani bc");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: true,
    // iteratable
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if (typeof value!== 'function') {
    console.log(`${key}:${value}`);
        
    }
    // console.log(`${key}:${value}`);
}