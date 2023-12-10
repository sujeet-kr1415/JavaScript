// forEach takes call back function does not have name
// javascrip by default provides forEach and map for looping over array

const coding = ["js", "ruby", "java", "python"]

// coding.forEach( function (item){
    // console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }
// You can pass a function also
// coding.forEach(printMe)

// forEach returns "item, index, arr"
coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
    //python 3 [ 'js', 'ruby', 'java', 'python' ]
} )

// forEach loop is very useful in array of objects "[{}, {}, {}]"

const myCoding = [
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )