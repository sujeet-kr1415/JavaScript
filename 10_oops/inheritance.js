class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`a course has been added to ${this.username}`);
    }
}

const chai = new Teacher("sujeet", "sujeet@amazone.com", "1234")
chai.addCourse()

const sai = new User("Jay")
// sai.addCourse()//sai.addCourse is not a function
sai.logMe()
chai.logMe()

console.log(chai === sai); // false
console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true
console.log(Teacher instanceof User); // false