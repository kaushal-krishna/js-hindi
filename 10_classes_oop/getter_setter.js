class User {
  constructor(email, password){
    this.email = email
    this.password = password
  }
  
  get email(){
    return `${this._email}-youremail`
  }

  set email(value){
    return this._email = value
  }

  get password(){
    return `${this._password}-encrypted` // -  We can encrypt pass while get
  }

  set password(value){
    return this._password = value // - Can be set without encryption
  }
}

const kaushal = new User("k@kaushal.ai", "abc")
console.log(kaushal.email);
console.log(kaushal.password);
