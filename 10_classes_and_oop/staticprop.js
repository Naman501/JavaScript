class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){
        return `1234`
    }

}

const Naman = new User("Naman")
// console.log((Naman.createId()));

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
       

    }
}

const iPhone = new Teacher("iphone","apple@iphone.com")
console.log(iPhone);

iPhone.logMe()