// when you want to execute some block of code repeatedly then you need function
function sayMyName (){
    console.log("S");
    console.log("U");
    console.log("E");
    console.log("E");
    console.log("T");
}

sayMyName // its just a reference it would not print anything
// sayMyName() // call or execute a function

function addTwoNumbers (number1,number2){
    // console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(5,12)
const result = addTwoNumbers(5,12)
// console.log("Result:", result);

function loginUserMessage(username){
    // you can also provide default value like username = sam as parameter
    // !username for if condition
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
loginUserMessage("Sujeet")
// nothing will gonna print
// console.log(loginUserMessage("Sujeet"));
// console.log(loginUserMessage());
// undefined just logged in

// rest and spread oprator "..." used when you want to take multiple argument in single parameter
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,521,644,321));

function calculateCartPrice(val1,val2,...num1){
    return val1,val2,num1
    //[ 2356, 498, 36 ]
}
console.log(calculateCartPrice(655,896,2356,498,36));

// now we will know how we pass object in function
const user = {
    username: "Sujeet",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({username: "Sujeet",
price: 199})

const myNewArray = [210,6533,987,665]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([220,5656,897,684]));