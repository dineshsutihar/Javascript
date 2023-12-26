// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created.

// Usecase of IIFE:
// 1. To create a private variable.
// 2. To create a private function.
// 3. To achieve block scoping.

(function chai() {
  console.log("DB CONNECTED");
})();

((  )=>{
    console.log("DB CONNECTED 1")
})();
(( name )=>{
    console.log(`DB CONNECTED 1 ${name}`)
})('Dinesh');

// named iife
(function chai() {
  console.log("DB CONNECTED");
})();