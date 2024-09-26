// ES6

// Classes - A syntactical sugar in Javascript

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
console.log(chai);

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// Classes - Under the Hood or Behind the Scenes

function BtsUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

BtsUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

BtsUser.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new BtsUser("tea", "tea@gmail.com", "123");
console.log(tea);

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
