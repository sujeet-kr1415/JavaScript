// Immediately Invoked Function Expressions
/**a function that runs the moment it is invoked or called in the JavaScript event loop
 * or to avoid the polution of global scope
 */

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// DB CONNECTED  and sometime you have to put semicolon to end the contex of IIFE

// we can also write it with the arrow function ()=>{}
// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })()
// you can also pass the argument in IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Sujeet")