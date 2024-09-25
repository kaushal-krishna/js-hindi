/** While Loop **/
let index = 2

while (index <= 10) {
  console.log(`Index is ${index}`);
  index = index +2
}

let superheroes = ["Batman", "Superman", "Spiderman"]
let heroIndex = 0

while (superheroes.length > heroIndex) {
  console.log(`Superhero is: ${superheroes[heroIndex]}`);
  heroIndex++
}

let star = "*";
let growing = true;

while (star.length > 0) {
  console.log(star);

  if (growing) {
    star += "*";
  } else {
    star = star.slice(0, -1);
  }

  if (star.length === 5) {
    growing = false;
  }
}

/** Do While Loop **/

// let score = 11
let score = 2

do {
  console.log(`Score is ${score}`);
  score = score +2
} while (score <= 10);
