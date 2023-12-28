// Reduce js method
//= Reduce is a method that takes a callback function and a starting value as arguments.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumWithInitial = myNumbers.reduce((acc, currVal)=>{
    console.log(`Accumulator: ${acc} and current value: ${currVal}`);
    return acc + currVal
},0) // 0 is the initial value

console.log(sumWithInitial);

// Example shopping cart

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 1999
    },
    {
        itemName: "Moblie dev course",
        price: 6999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceTopay = shoppingCart.reduce((acc,item)=>(item.price+acc),0)

console.log(priceTopay);