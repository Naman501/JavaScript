Array.prototype.extraProperty = "Naman"
const myNewArray = [1,2,3,4,5] 
for( let v in myNewArray){
if (myNewArray.hasOwnProperty(v)) {
     console.log(v);
}
   
}


