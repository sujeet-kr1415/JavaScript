// Promises-

const promiseOne = new Promise(function(resolve, reject){
    // Do and async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})
// Async task is complete
// Promise consumed
// we have to consumed the resolve to .then

promiseOne.then(function(){
    console.log("Promise consumed");
})

// its not mandatory to store Promise() into a variable it has two part resolve() and reject()

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})
// instead of doing it in two different part you can do it in one part as done above
// Async task 2
// Async 2 resolved

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Sujeet', email: "javascript@example.com"}, 1000)
    })
})

promiseThree.then(function(user){
    console.log(user);
    // {username: 'Sujeet', email: "javascript@example.com"}

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Sujeet", pass: "1234"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
// we can do chaining of then()
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Sujeet", pass: "1234"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})



async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    // This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
    try {
        const response = await promiseFive // promiseFive is object
        console.log(response);
    } catch (error) {
        console.log(error);
        //here we are handling error gracefully
    }
}

consumePromiseFive()

// now we can fetch the data 

// async function getAllUsers(){
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // const data = response.json()
//     // console.log(data);
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         // this code is still working but not giving the result just bcouz we donot put "await before response"

//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// now we can aslo do this with .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))