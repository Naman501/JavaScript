const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(acc,currVal) {
//     console.log(`acc:${acc} and currval:${currVal}`);
//     return acc+ currVal
// } ,3 )

const myTotal = myNums.reduce( (acc,curr) => acc+curr ,3 )

console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"python course",
        price:999
    },{
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"Data Science Course",
        price: 12999
    }
]


const priceToPay = shoppingCart.reduce( (acc,item) => acc+ item.price,0 )
console.log(priceToPay);