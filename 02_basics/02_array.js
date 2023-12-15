const marvel_heros = ["thor","Ironman","Captain America"]
const dc_heros = ["superman", "batman","flash"]

// marvel_heros.push(dc_heros)
/*
[
  'thor',
  'Ironman',
  'Captain America',
  [ 'superman', 'batman', 'flash' ]
]
 */

// console.log(marvel_heros);
// it will print array inside array that is not good practice
// console.log(marvel_heros[3][1]);
// accessing the element using 2d array-- batman

// we can do this using concat method

// const allHeros = marvel_heros.concat(dc_heros)
// // concat returns new array
// console.log(allHeros);
// [ 'thor', 'Ironman', 'Captain America', 'superman', 'batman', 'flash' ]

// we can use "Spread method act as concat"
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);
// [ 'thor', 'Ironman', 'Captain America', 'superman', 'batman', 'flash' ]

// another method called flat()
const another_array = [1,2,3,[4.5,6,6],9,7,8,[45,65,78,[78,65,88]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
/*
[
   1,  2,  3, 4.5,  6,  6,
   9,  7,  8,  45, 65, 78,
  78, 65, 88
]
 */

console.log(Array.isArray("Sujeet"));
// false
console.log(Array.from("Sujeet"));
// [ 'S', 'u', 'j', 'e', 'e', 't' ]

console.log(Array.from({name: "sujeet"})); // interesting for interview
// [] return empty array

let score1 = 100
let score3 = 300
let score2 = 200

console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
