// let myName = "sujeet     "
// let myEmail = "sujeet@gmail.com     "

// console.log(myName.length);
// console.log(myName.trueLenth);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sujeet = function(){
    console.log("sujeet is present in all objects");
}

Array.prototype.heySujeet = function(){
    console.log(`sujeet says hello`);
}

// heroPower.getSpiderPower()
// heroPower.sujeet()
// myHeros.sujeet()
// sujeet is present in all objects

// myHeros.heySujeet()
// heroPower.heySujeet() //heroPower.heySujeet is not a function

/// inheritance

const user = {
    name: "Sujeet",
    email: "sujeet@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__: TeachingSupport
    // this way you can access the property of TeachingSupport
}

Teacher.__proto__ = user

// modern syntex
 
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    " 

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sujeet".trueLength()
"chai".trueLength()
/**
 * ChaiAurCode    
True length is: 11
sujeet
True length is: 6
chai
True length is: 4
 */