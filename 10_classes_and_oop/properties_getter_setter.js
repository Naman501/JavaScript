function User(email,password){
    this._email = email;
    this._password=password
}

Object.defineProperty(this,'email',{
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email=value
    }
})

Object.defineProperty(this,'password',{
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password=value
    }
})
// console.log(User);
 const chai = new User("loser@yoyo.com","1234567890")

console.log(chai._email);
console.log(chai._password);