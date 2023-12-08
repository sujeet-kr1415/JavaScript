// if

const isuserLoggedIn = true
if (isuserLoggedIn) {
    console.log('executed');
}

// some conditional operator
// <, >, <=, >=, ==,!= they only check the value
if (4 == "4") {
    console.log("execute");
} // and it will print execute

// so for exact data and data types coparision we have "===" and "!==" operator
if (4 == "4") {
    console.log("execute");
} // it will give error

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

const temperature = 40
if (temperature == 40) {
    console.log("temperature is 40");
} else{
    console.log("temperature is not 40");
}
