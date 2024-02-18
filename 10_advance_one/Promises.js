// Promise in JavaScript

const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptographic, network
    setTimeout(() => {
        console.log("Async task is complete")
        resolve()
    }, 1000)
})

promiseOne.then(() => {//directly connected to resolve
    console.log("Promise Consumed")
})


//  using both in single function without storing on any variable
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved");
})


//  Promise 3rd 
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Dinesh", email: "dinesh@example.com" }) //Passing the value to then function, mainly we will pass objects but we can also pass array of datas from here
    }, 1000);
})

promiseThree.then((user) => { //accessing the data form resolve 
    console.log(user);
})


// Promise 4th

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Dinesh", password: "pass123" })
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 2000);
})

// promiseFour.then().catch()
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => { //returned value from upper then 
    console.log(username);
})
.catch((error) => {
    //this will run if error occured
    console.log(error);
}).finally(()=>{
    console.log("This will always run")
})


// Promise 5th

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "pass123" })
        } else {
            reject("ERROR: JS went wrong in Promise 5th")
        }
    }, 2000);
});

//async await => 

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    } catch (error){
        console.log(error);
    }
}

consumePromiseFive()


// practise

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data =await response.json() //we use await keyword on some thing which will take like here response takes some time to get converted into json file so we have used await keyword
//         console.log(data);
//     } catch {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()



// above function in .then .catch format 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))