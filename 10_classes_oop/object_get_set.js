const User = {
  _email: 'k@kl.com',
  _password: 'abc',

  get email(){
    return `${this._email}-youremail`
  },

  set email(value){
    this._email = value
  },

  get password(){
    return `${this._password}-encrypted`
  },

  set password(value){
    this._password = value
  }
}

const tea = Object.create(User)

console.log(tea.email);
console.log(tea.password);