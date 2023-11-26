const promiseOne = new Promise(function(resolve,reject){
        //Do an Async task
        //DB calls , cryptography , network call
        setTimeout(function(){
            console.log(`Async task is completed.`);
            resolve()
        },1000)
})



// Promise toh create ho gaya ab usko CONSUME bhi karna hai.

promiseOne.then(function(){
        console.log("Promise Consumed.");
}) 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const promiseThree = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({username:"Naman",email:"code@example.com"})
        },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if (!error) {
         resolve({username:"Lattim", password:"123sex"})   
        } else{
            reject('Something goes wrong.')
        }
    },1000)
})


// promiseFour.then().catch()

promiseFour.then( (user)=> {
    console.log(user);
    return user.username
} ).then( (username) =>{
    console.log(username);           // chaining
} ).catch(function(error){
    console.log(error);
}).finally(()=> console.log(`The promise is either resolved or rejected`));

// console.log(username);

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if (!error) {
         resolve({username:"JavaScript", password:"123"})   
        } else{
            reject('JS goes wrong.')
        }
    },1000)
})


// promiseFive.then()

// async function consumePromiseFive ({
//     const response = await promiseFive
//     console.log(response);
// })

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }



// async function getAllUsers(){
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//   } catch (error) {
//     console.log("ERROR",error);
//   }
// }




// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data) =>{ 
    console.log(data);
})
.catch((error)=> {console.log(error);})

