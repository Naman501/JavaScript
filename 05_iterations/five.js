const coding =["js","ruby","pyhton","cpp","java"]

coding.forEach( function (item) {
                        console.log(item);                    // =>call-back function  ka naam nahi hota hai
})
console.log("PKMKB");
coding.forEach( (val) => {
    console.log(val);
})

function printMe(items) {
    console.log(items);
}

coding.forEach(printMe)

coding.forEach( (chut,index,arr) =>{
    console.log(chut,index,arr);
})


const myCoding = [
    {
        langName:"jsc",
        langFiile:"js"
    },
    {
        langName:"java",
        langFiile:"java"
    },
    {
        langName:"pyhton",
        langFiile:"py"
    }
]

myCoding.forEach( (itemm) => {
    console.log(itemm.langName);
} )
