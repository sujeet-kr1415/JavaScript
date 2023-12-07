// shallow copy -- share same reference
// deep copy -- donot share same reference

//
 const newArr = [1,2,3,"ram",true,2.5]  
 const myArr = [0,1,3,4,5,6]
 const myHeros = ["superman","ironMan","shaktiman"]

 // creating array via Array function

 const myArr2 = new Array(1,2,3,4,5)
 myHeros[1]="Hanuman";
 console.log(myArr[3]);
 console.log(myArr2[2]);
 console.log(myHeros[1]);

 // Array+Methods--


// myArr.push(6)
// myArr.push(7)
// myArr.pop() remove the last element of the array

// myArr.unshift(9) inser an element to zero index and shift all other element by one

// myArr.shift() remove the first element in the array and shift rest of the element by -1


// console.log(myArr.includes(9)); checks whether element is present in the array or not returns boolean value

// console.log(myArr.indexOf(3)); if element found return index and not found return -1

// const newArr = myArr.join()  its a way of copying the element of array to another array

// console.log(myArr);
// console.log( newArr);


// slice-- return the array of given range and does not modify the original array
// splice -- return the array of given range+1 and modify the original array also


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);