class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    get password(){
        return `${this._password.toUpperCase()}sammy`
    }

    set email(value){
        this._email = value
    }

    set password(value){
        this._password = value
    }
}

const sujeet = new User("s@sujeet.ai", "abcd")
console.log(sujeet.password); //1223  ABCDsammy
console.log(sujeet.email);  // S@SUJEET.AI

/**
 * now here is problem: constructor and set passowrd both seting the same due to which there will be an error 
 * RangeError: Maximum call stack size exceeded
 *  at set password [as password]
 * 
 * to fix this we have to change the variable name in get and set method prefixing the "_"
 */
