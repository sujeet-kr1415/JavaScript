// singleton
// Object.create

// object literals

const mySybl = Symbol()  // symbol for unique key


const JsUser = {  /// object leterals
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySybl]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySybl])
// console.log(JsUser.mySybl);

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) /**Prevents the modification of existing property attributes and values, and prevents the addition of new properties. */
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
// console.log(JsUser.age);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());