const user = {
    username:"Naman",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to Web Bitch!`);
        console.log(this);
    }
}
// welcomeMessage()
user.welcomeMessage()
user.username = "SAM"
user.welcomeMessage()

console.log(this);

function chai(){
    let username = "chamar"
    console.log(this.username);
}

chai()


const yoyo = () => {
    let username = "amar"
    console.log(this.username);
}

yoyo()

const add = (n1,n2) => {
    return n1+n2                  //{} use hoga toh return keyword likhna padega
}
console.log((add(6,9)));

const sub = (n1,n2) =>n1-n2

console.log((sub(63,9)));

const myArray = [2,3,4,5,6]

// myArray.forEach() 
