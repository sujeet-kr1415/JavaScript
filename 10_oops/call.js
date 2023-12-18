/**
 call -  The call() method of Function instances calls this function with a given this value and arguments provided individually.


 */

function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");

}

function createUser(username, email, password){
    // SetUsername(username)
    // called
    // createUser { email: 'sai@fb.com', password: '123' }
    SetUsername.call(this, username)
    // called
    // createUser { username: 'sai', email: 'sai@fb.com', password: '123' }
    this.email = email
    this.password = password
}

const sai = new createUser("sai", "sai@fb.com", "123")
console.log(sai);

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);
  // Expected output: "cheese"
  