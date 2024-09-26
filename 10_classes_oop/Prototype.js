const myHeros = ["thor", "spiderman"];

const heroPower = {
  thor: "hammer",
  spiderman: "sling",
};

Object.prototype.kaushal = function () {
  console.log("Prototype available to all objects");
};

Array.prototype.sayKaushal = function () {
  console.log("Prototype available only to arrays");
};

heroPower.kaushal();
myHeros.sayKaushal();
// heroPower.sayKaushal() Throws an error as method is only available to arrays

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport, // Old approach syntax
};

Teacher.__proto__ = User; // Old approach syntax

// Modern Approach Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


/* Challenge - Return true length using String proto*/
let myName = "Kaushal   "
let myChannel = "chai   "


// Solution
String.prototype.trueLength = function () {
  return this.trim().length
}

console.log(`True length is: ${myName.trueLength()}`);