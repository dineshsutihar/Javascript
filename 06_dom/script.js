// getElementById

const title = document.getElementById("title");

// innerText, innerHTML,textContent

title.innerText = "Got you!"; // it will show the visible text
title.textContent = "Got you!"; // it will show all text
title.innerHTML = "Got you!"; // includes tags

// getElementsByClassName
const hellos = document.getElementsByClassName("hello");


// Remember tags

document.querySelector("h1"); // first one
document.querySelectorAll("h1"); // all of them

// selecting id, class, tag
document.querySelector("#hello"); // id
document.querySelector(".hello"); // class
document.querySelector("h1"); // tag


const myul = document.querySelector('ul');

const turnGreen = myul.querySelector('li'); // only first li

turnGreen.style.backgroundColor = "green";
turnGreen.style.fontSize = "50px";
turnGreen.innerText = "I am green!";


const tempLiList = document.querySelectorAll("li"); // all of them
// it will return NodeList so we can user forEach method but we cannot user map methods

tempLiList[0].style.color = "red";
tempLiList[1].style.color = "blue";
tempLiList[2].style.color = "green";

const myH1 = document.querySelectorAll("h1");

myH1.forEach((h) => {
    h.style.color = "blue";
})

const tempClassList = document.getElementsByClassName('list-item') // HTMLCollection will be returned
tempClassList.forEach((li)=> console.log(li)) // it will not work because it is not an array
// lets convert it to array
const convertedArr = Array.from(tempClassList);
convertedArr.forEach((li)=> li.style.color="blue") // it will work now
