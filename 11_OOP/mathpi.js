const discripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(discripter);


const chai = {
    name : "ginger",
    price: 250, 
    isAvailable: true, 
    orderChai : function (){
        console.log("testing chai");
    }

}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    //writable: false,
    enumerable: false, //naem will not be the part of loop 
  //configurable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for( const [key,value] of Object.entries(chai)){
    if (typeof value != 'function') {
        
        console.log(`${key} : ${value}`);
    }
}