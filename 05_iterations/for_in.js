const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python"
}

for (const key in myObject) {
  console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["java", "javascript", "ruby", "cpp"]

for (const key in programming) {
  console.log(programming[key]);
}