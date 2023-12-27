const coding = ['coding', 'is', 'fun', '!'];

coding.forEach( function (item)  {
    console.log(item);
})

coding.forEach((item, index) => {
    console.log(`${index} - ${item}`);
})

function printMe(item) {
    confirm.log(item);
}

coding.forEach(printMe); // just pass the reference of the function not the function call

// 

coding.forEach((item,index,array) => {
    console.log(`${index} - ${item}`);
    console.log(array);
});


// this can be used in database to iterate over the data
const myCoding =[
    {
        language: 'Javascript',
        level: 'Intermediate'
    },
    {
        language: 'Python',
        level: 'Intermediate'
    },
    {
        language: 'Ruby',
        level: 'Hard'
    },
    {
        language: 'PHP',
        level: 'Easy'
    }
]

myCoding.forEach((item) => {
    console.log(item.language);
})