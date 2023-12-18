// ES^6

class user{
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user("sai", "chai@gmail.com", "123")
// console.log(chai.encryptPassword());  //123abc
// console.log(chai.changeUsername());

// Behind the scence

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const jai = new User("Jai", "jai@google.com", "321")
console.log(jai.encryptPassword());  //321abc
console.log(jai.changeUsername());  // JAI
