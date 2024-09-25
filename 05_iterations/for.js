for (let i = 0; i <= 5; i++) {
  console.log("*" * i);
}

for (let i = 1; i <= 10; i++) {
  console.log("Outer Loop", i);
 for (let j = 1; j <= 10; j++) {
  console.log(j + ' * ' + i + ' = ' + i*j);
 }
}

const myArray = ["Batman", "Superman", "Flash"];

for (let i = 0; i < myArray.length; i++) {
  const hero = myArray[i];
  if (hero === "Superman") {
    console.log("Superman Detected");
    break;
  }
  console.log(hero);
}