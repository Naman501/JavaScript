const name = "Naman"
const repoCount = 5

console.log(name + repoCount +" Value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //string-interpolation

const gameName = new String(`Naman Mittal`)
console.log(gameName[0]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0, 5)
console.log(newString);

const anotherString = gameName.slice(0,2)
console.log(anotherString);



const newString1 = "    lattim    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://choot.com/no%20bitches"

const fuck = url.replace('%20', '~')
console.log(fuck);
console.log(fuck.includes('choot'))

console.log(gameName.split('N'));