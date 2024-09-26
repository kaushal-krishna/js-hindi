function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `${this._email}-youremail`;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}-encrypted`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai");
console.log(chai.email);
console.log(chai.password);
