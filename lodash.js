var lodash = require("lodash")

//array
const array=lodash.chunk(['a', 'b', 'c', 'd'], 2);
console.log(array);

//String or Not
const name = "javascript"

if (lodash.isString(name)){
    console.log("it is string")
} 
else{
    console.log("it is not a string")
}

// difference
const diff =lodash.difference([2, 5], [2, 3]);
console.log(diff)