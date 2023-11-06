const myNumber = [1,2,3,4,5,6,7,8,9,10]

// let newNumbs = myNumber.map( (num) => {
//     return num +10} )

    const newNumbs = myNumber
        .map( (num) => num*10 )
        .map( (num) => num+10 )
        .filter( (num) => num>70 )

    console.log(newNumbs);

    
