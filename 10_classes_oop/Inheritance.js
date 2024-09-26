class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addCourse()

chai.logMe() // - Has access

const masalaChai = new User("masalaChai")
// masalaChai.addCourse() - No access

masalaChai.logMe()

// Used to check what class/instance used to create an object
console.log(chai instanceof Teacher)
console.log(chai instanceof User) // - Instance of Instance
console.log(masalaChai instanceof User)