const marvel_heros = ["thor", "ironman", "spiderman", "hulk", "captain america"];
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros); // returns array=> ["thor", "ironman", "spiderman", "hulk", "captain america", Array(3)]

console.log(marvel_heroes);
console.log(marvel_heroes[5][0]) // returns string=> superman

const all_heros=marvel_heros.concat(dc_heros); // returns array=> ["thor", "ironman", "spiderman", "hulk", "captain america", "superman", "flash", "batman"]


//spread operators

const all_new_heros=[...marvel_heros,...dc_heros]; // returns array=> ["thor", "ironman", "spiderman", "hulk", "captain america", "superman", "flash", "batman"]



const another_array = [1,2,3,[4,5,6],7,[6,7,[8,9,10]]];
const real_another_array=another_array.flat(Infinity); // returns array=> [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9, 10], Infinity is used to flatten the array to any level



Array.isArray("Dinesh")// returns boolean=> false
Array.from("Dinesh") // returns array=> ["D", "i", "n", "e", "s", "h"]
Array.from({name:"Dinesh"}) // returns array=> [] empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) // returns array=> [100, 200, 300]