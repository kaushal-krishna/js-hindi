// Objects and new keyword
function createUser(username, score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
  this.score++
}

createUser.prototype.printMe = function(){
  console.log(`The score is ${this.score}`);
}

// importance of `new` keyword: it will caryy all prototype properties also including main function

const chai = new createUser("chai", 25) // with prototype properties and methods
const tea = createUser("tea", 250)  // without prototype properties and methods

chai.printMe() // also have prototype properties and methods
tea.printMe() // don't have prototype properties and methods