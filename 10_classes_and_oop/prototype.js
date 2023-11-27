let myName = "Naman            "
let myChannel= "Coffee               "

console.log(myName.length);
console.log(myName.trim().length);

let myHeros = ["Thor","spiderman"]

let heroPower = {
    Thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidey Power is ${this.spiderman}`);
    }
}

Object.prototype.Naman = function(){
    console.log(`Naman is present in all objects.`);
}

Array.prototype.heyNaman = function(){
    console.log(`Naman Says HELLO!`);
}

heroPower.Naman()
myHeros.Naman()
heroPower.heyNaman()