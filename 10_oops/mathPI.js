const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);
/**
 * {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
// 3.141592653589793
// 3.141592653589793

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bani");
    }
}

// you cannot directly access the object only its property

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**
 * {
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}

now you can define your own property
 */

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/**
 * {
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}

you directly can not iterate upon object only theire [key, values]
 */

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        // console.log(`${key} : ${value}`);
        // price : 250
        // isAvailable : true
    }
    console.log(`${key} : ${value}`);

            // price : 250
            // isAvailable : true
            // orderChai : function(){
            // console.log("chai nhi bani");
    }
}