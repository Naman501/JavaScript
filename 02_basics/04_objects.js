// const tinderUser = new Object()
const tinderUser = {}

 tinderUser.id ="123abc"
 tinderUser.name = "Bhupendra Jogi"
 tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            firstname:"naman",
            lastname:"mittal"
        
        }
    }
}

console.log(regularUser.fullName.userfullname.lastname);

const obj1={1: "a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj4,obj2,obj1)
const obj3 ={...obj1, ...obj4 , ...obj2} 
console.log(obj3);

const users = [
    {
        id:1,
        email:"nm@g.com"
    },
    {
        id:2,
        email:"nmn@g.com"
    }
]

const t = users[1].email
console.log(t);
console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));
console.log(tinderUser.hasOwnProperty('regularUser'));

