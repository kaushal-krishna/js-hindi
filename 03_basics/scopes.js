function one() {
  let heaven = "swarg";
  function two() {
    let hell = "nark";
    console.log(hell);
  }
  two();
  console.log(heaven);
}
one();

if (true) {
  const username = "Kaushal";
  if (username === "Kaushal") {
    const website = "Florixer";
    console.log("This is user", username);
    console.log(username + " from " + website);
  }
}
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
