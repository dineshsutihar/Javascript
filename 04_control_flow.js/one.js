// Is statement

const isUserLoggedIn = true
if(isUserLoggedIn) {
    console.log('Welcome User')
}

// Condition checking operatiors :
//  ==, ===, !=, !==, >, <, >=, <=, &&, ||, !

if(1 == '1') {
    console.log('1 == "1"')
}

if(200>100) {
    console.log('yes')
}

if(200<100) console.log('yes');


if(200<100) {
    console.log('yes')
} else {
    console.log('no')
}

// multiple if else
if(200<100) {
    console.log('yes')
} else if(200>100) {
    console.log('no')
} else {
    console.log('equal')
}


// && 
if(200>100 && 200>100) {
    console.log('yes')
} else {
    console.log('no')
}

// ||
if(200>100 || 200<100) {
    console.log('yes')
} else {
    console.log('no')
}   

// !
if(!(200>100)) {
    console.log('yes')
} else {
    console.log('no')
}

// Ternary operator
// condition ? true : false
const isUserLoggedIn1 = true
isUserLoggedIn1 ? console.log('Welcome User') : console.log('Please login')
