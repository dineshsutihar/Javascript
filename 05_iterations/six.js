// const coding = ['coding', 'is', 'fun', '!'];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })

// console.log(values);  // undefined because forEach does not return anything



const myNums = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNums.filter((num)=>num>5) // filter returns an array

// remember if you are using scope {} then we have to user return keyword

console.log(newNums);

// doing same using for each

const newNums2 = [];
myNums.forEach((num)=>{
    if(num>5){
        newNums2.push(num);
    }
})

// use of filter

const books = [
    {
        title: "Javascript",
        genre: "Programming",
        published: 2020
    },
    {
        title: "Python",
        genre: "Programming",
        published: 2019
    
    },
    {
        title: "PHP",
        genre: "Programming",
        published: 2017
    },
    {
        title: "Ruby",
        genre: "Programming",
        published: 2018
    },
    {
        title: "India",
        genre:"history",
        published: 2015
    },
    {
        title: "China",
        genre:"history",
        published: 2016
    },
    {
        title: "Japan",
        genre:"history",
        published: 2017
    },
    {
        title: "USA",
        genre:"history",
        published: 2018
    },
    {
        title: "UK",
        genre:"history",
        published: 2019
    },
    {
        title: "Australia",
        genre:"history",
        published: 2020
    },
    {
        title: "Canada",
        genre:"Science Fiction",
        published: 2015
    },
    {
        title: "Russia",
        genre:"Science Fiction",
        published: 2016
    },
    {
        title: "France",
        genre:"Science Fiction",
        published: 2017
    },
    {
        title: "Germany",
        genre:"Science Fiction",
        published: 2018
    },
    {
        title: "Italy",
        genre:"Science Fiction",
        published: 2019
    },
    {
        title: "Spain",
        genre:"Science Fiction",
        published: 2020
    }
];

let userBooks = books.filter((bk) => bk.genre === "Programming"); // this is real exaple of intracting with database

 userBooks = books.filter((bk) =>{return bk.genre === "Programming" && bk.published >= 2018});
 userBooks = books.filter((bk) => {return bk.genre === "Programming" && bk.published >= 2018 && bk.published <= 2020|| bk.published === 2020});
console.log(userBooks);