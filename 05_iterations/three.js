//for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const Greetings = "Hello World!"

for (const greet of Greetings) {
   console.log(greet);
    if (greet === "l") {
        
       
        // console.log(greet);
        break;
        }
}

//Maps => maintains order and no repetition

const map = new Map()
map.set('IN',"India")
map.set('FR',"France")
map.set('USA',"United States Of America")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) {
    console.log(key, `:-` , value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key,value);
// }
for (const key in myObject) {
   console.log(key,`:`,myObject[key]);
        
    }
