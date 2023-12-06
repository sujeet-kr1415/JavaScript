const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.5849
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ================== Maths ==================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.64));
console.log(Math.floor(5.655));


console.log(Math.random());
console.log((Math.random()*10)+1);
// here we want random value to be greater then 1

console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+ min);
// here we want random value between min and max
