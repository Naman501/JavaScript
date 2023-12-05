const User = {
    _email:'nmn@mttl.com' ,
    _password: "62Bitches",

    get email(){
        return this._email.toUpperCase()
    },
    
    set email(val){
        this._email=val
    }
}

const tea = Object.create(User)
console.log(tea.email);

