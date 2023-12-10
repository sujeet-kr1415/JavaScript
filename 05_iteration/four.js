// iterator on object
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
// for in loop
for (const key in myObject) {
    // console.log(key);
    // cpp rb swift
    // console.log(`${key} is for ${myObject[key]}`);
}

// can we use for in loop to iterate over array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    // js rb py java cpp
    // console.log(key);
    // 0 1 2 3 4 5- index 
}

for (const iterator of programming) {
    // console.log(iterator);
// this will print the values

    // console.log(programming[iterator]);
    // undefined 
    // undefined 
    // undefined 
    // undefined 
}

/**
 * the diff betwn "for of loop- this works for arrays and map only" and "for in loop- this works for object[key, value] pair " and it does not work on map
 * 
 */
    