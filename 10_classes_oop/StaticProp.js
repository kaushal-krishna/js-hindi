class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }

  // Will not be accessed by object or inherits taking instance of this class
  static createId() {
    return `123`;
  }
}

const kaushal = new User("kaushal");
// console.log(kaushal.createId()); - Can't be accessed from User class

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
// console.log(iphone.createId()); - Can't be accessed from User class
iphone.logMe();
