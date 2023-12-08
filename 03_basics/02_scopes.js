let a = 45
const b = 23
var c = 300
// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
    let a = 60
    const b = 25
    var c = 30
    // console.log("ineer:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

// var is not good to practice bcouz it changes inside conditional and loop statement

/**
 * scope inside console is different and scope inside node is different
 */

function one(){
    const username = "sujeet"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()

}

// one()

if(true){
    const username = "sujeet"
    if (username === "sujeet") {
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

/// ++++++++++++++ interesting ++++++++++++++++++

// basic function
addone(5) // this way it works
function addone(num){
    return num + 1
}



//a kind of function but normally call "expression"

addtwo(5) // throw an error "Cannot access 'addtwo' before initialization"
const addtwo = function(num){
    return num + 2
}

addtwo(5) // it will work
