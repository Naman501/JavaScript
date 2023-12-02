let myName = "Naman            "
let myChannel= "Coffee               "

console.log(myName.length);
console.log(myName.trim().length);
console.log(myChannel.trim().length);

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

heroPower.Naman()

myHeros.Naman()

Array.prototype.arrayNaman= function (){
    console.log(`Naman says fuck you punk!`);
}
myHeros.arrayNaman()
// heroPower.arrayNaman()


//inheritance

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}