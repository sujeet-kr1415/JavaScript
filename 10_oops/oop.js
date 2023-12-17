const user = {
    username: "Sujeet",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        // console.log(`Username ${this.username}`);
        // Username Sujeet
        // console.log(this);
        // {
        //     username: 'Sujeet',
        //     loginCount: 8,
        //     signedIn: true,
        //     getUserDetails: [Function: getUserDetails]
        //   }
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// Got user details from database
// undefined
// user.getUserDetails()  Got user details from database
// console.log(this);  {}

// constructor function --> new keyword creats a instance for each

function User(userName, loginCount, signedIn) {
    this.loginCount = loginCount
    this.signedIn = signedIn
    this.userName = userName

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    // return this  its not mandatory to write this stmt
}

const userOne = new User('Sujeet', 23, true)
/**loginCount: 23,
  signedIn: true,
  userName: 'Sujeet' */
const userTwo = new User('javascript', 12, false)
// here the arguments gets override by userTwo values that is why we have to put "new" keyword for every User 
// console.log(userOne);
/**loginCount: 12,
  signedIn: false,
  userName: 'javascript' 
*/
// User { loginCount: 23, signedIn: true, userName: 'Sujeet' }
  
console.log(userTwo);
// User { loginCount: 12, signedIn: false, userName: 'javascript' }

console.log(userTwo.constructor);
// [Function: User]

// there is also a method known as "instanceOf" The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true