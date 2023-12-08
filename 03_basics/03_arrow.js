const user = {
    username: "Sujeet",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this); // {}
// browser k andar jo object hai wo window hai
// or node k andar global object nhi hai sirf empty object hai

// function chai(){
//     let username = "Sujeet"
//     // console.log(this); // print various thing
//     console.log(this.username); //undefined
// }
// chai()
// const chai = function(){
//     let username = "sujeet"
//     console.log(this.username);
// }
// chai() print undefined

// Arrow function  () => {}

const chai = () => {
    let username = "sujeet"
    console.log(this.username);
    }
// chai()  // undefined
 
// explicite return
// const addTwo = (num1,num2)=> {
//     return num1 + num2
// }

// const addTwo = (num1,num2)=> num1 + num2 // implicite return
// const addTwo = (num1,num2)=> (num1 + num2) // you can put () also but not {}
// What if we have to return Object in inplicite method
const addTwo = (num1,num2)=> ({username: "Sujeet"})

console.log(addTwo(5,65));
/**if you put {} with => you have to return the value */