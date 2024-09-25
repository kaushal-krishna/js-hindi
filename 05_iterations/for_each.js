const coding = ["java", "javascript", "ruby", "python", "cpp"];

coding.forEach(function (arrayItem) {
  console.log(arrayItem);
});

coding.forEach((value) => {
  console.log(value);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe)

coding.forEach((item, index, array) => {
  console.log(item, index, array);
});

const myCoding = [
  {
    langName: "javascript",
    langFile: "js",
  },
  {
    langName: "java",
    langFile: "java",
  },
  {
    langName: "python",
    langFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(`${item.langName} :- ${item.langFile}`);
});