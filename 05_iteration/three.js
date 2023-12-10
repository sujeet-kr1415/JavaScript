// for of loop
// for (const iterator of object) {
    
// }
const arr = [3,5,7,8]
for (const i of arr) {
    // console.log(`each element ${i}`);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

// Maps - it removes duplicates and maintain the ordered 

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("Fr", "France")
map.set("IN", "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '-', value);
}

const myObject = {
    'game2': "nfs",
    'game1': 'pubg'
}

// for (const [key, value] of myObject) {
//     console.log(key, '-', value);
// } so objects are not iterable there have some specific way to do so

