class User{
    constructor(email,password){
        this.email=email
        this.password= password
    }
    get email(){
return this._email.toUpperCase()
    }
    set password(lmao){
        this._password=lmao.toUpperCase()
    }
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}_yo'Momma`
    }
    set email(value){
        this._email= value.toUpperCase()
    }
}

const naman = new User("Naman@id.com","6969")
console.log(naman.password);
console.log(naman.email);

