//for 

for (let index = 0; index <= 10 ; index++) {
    const element = index; // curly braces { } => matlab block scope
   if (element >= 5) {
    console.log("5 is best bitch");
   }
   
    console.log(element);

    
}

for (let index = 0; index <=10 ; index++) {
    console.log(`Outer loop :${index}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop : ${j} & inner loop :${index}`);
    }

    let myArray = ["batman","flash","Superman"]

    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        console.log(element);
    }
    
}


// break & continue

for (let index = 1; index < 21; index++) {
    // const element = index;
    if (index ==5 ) {
        console.log(`Detected 5`);
        break
    }
    console.log(`value of i is ${index}`);    
}

for (let index = 1; index < 21; index++) {
    // const element = index;
    if (index ==5 ) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);    
}
