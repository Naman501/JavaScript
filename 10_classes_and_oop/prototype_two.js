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

const user = {
    name:"LAttim",
    e_mail:"yoyo@gmail.com"

}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : `JS assignment`,
    fullTIme: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUserName = "  ChaiAurCode       "

String.prototype.truelength = function(){
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    console.log(`True value is: ${this.trim()}`);

}

anotherUserName.truelength()

"LAMAO".truelength()
"FLAT".truelength()