/** for of **/
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
  console.log(num);
}
const greetings = "Hey Krishna"

for (const greet of greetings) {
  console.log(`The char '${greet}' is at ${greetings.indexOf(greet)}`);
}

/** Maps **/
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('AUS', 'Australia')

console.log(map);

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}
