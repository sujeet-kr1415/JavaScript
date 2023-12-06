//Date
console.log(Date);
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
// object bcoz array, object and function

//  let myCreatedDate = new Date(2023,0,44)
// console.log(myCreatedDate.toDateString());
// // months start from 0 = january
// let someDate = new Date(2023,2,56,12,5)
// console.log(someDate.toLocaleString());
let myCreatedDate = new Date("01-14-2023")
let mytimeStamp = Date.now();

// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
// // they return milisecond so that we need to compare
// // and we also need to convert them into comparable
// console.log(myCreatedDate.toLocaleString());
// console.log(Math.floor(Date.now()/1000));
// // that returns small value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


// string interpolation means '${}'
// '${newDate.getDay()} and the time'

console.log(newDate.toLocaleString('default',{weekday: "long"}));
// we can use many ways localString function for date and days