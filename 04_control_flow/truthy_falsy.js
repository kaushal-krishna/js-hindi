const userEmail = "k@kaushal.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values
//-- 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//-- "0", "false", " ", [], {}, function(){}

//Checking for array
const emptyArray = [];

if (emptyArray.length === 0) {
  console.log("Array is empty");
}

//Checking for objects
const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
// |-- Mostly used for dynamic operations like database querying

let val1;
// val1 = 5 ?? 10 (gets first available value if there's no null or undefined)
// val1 = null ?? 15
// val1 = undefined ?? 20 (gets the first value other than null or undefined)
// val1 = null ?? 20 ?? 25 (prefers the first value after null or undefined)

console.log(val1);

// Ternary Operator

// Syntax: condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than eighty") : console.log("More than 80");
;
 