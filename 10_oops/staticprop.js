/**
 * The static keyword defines a static method or field for a class, or a static initialization block (see the link for more information about this usage). Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
 */

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sujeet = new User("sujeet")
// console.log(sujeet.createId());
//sujeet.createId is not a function

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@google.com")
// iphone.logMe() //USERNAME is iphone
// iphone.createId() //iphone.createId is not a function