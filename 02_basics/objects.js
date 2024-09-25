let sym = Symbol("key");

const user = {
  name: "Kaushal",
  age: 16,
  [sym]: "symbol2",
  greeting: function () {
    console.log(
      `This is ${this.name} and his age is ${
        this.age
      } with interests: ${this.interests.join(", ")}`
    );
  },
  interests: ["code", "programming", "dsa", "leetcode"],
};

console.log(user.greeting());
console.log(typeof sym);
console.log(typeof user[sym]);
console.log(user.interests[1]);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
console.log({ ...obj1, ...obj2 });

const users = [
  {
    name: "Kaushal",
    age: 16,
  },
  {
    name: "Shaktiman",
    age: 18,
  },
];

console.log(Object.keys(users[1]));
console.log(Object.values(users[1]));
console.log(Object.entries(users[1]));

console.log(user.hasOwnProperty("name"));
