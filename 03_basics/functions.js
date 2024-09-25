function addTwoNumbers(num1, num2) {
  // let sum = num1 + num2;
  // return sum
  return num1 + num2;
}

console.log(addTwoNumbers(3, 4));

function loginUser(username) {
  let message;
  if (!username) {
    message = "Please enter a username";
    return message;
  }
  message = `${username} has just logged in`;
  return message;
}

console.log(loginUser("Kaushal"));

function calculateCartPrice(val1, val2, ...prices) {
  return prices;
}

console.log("The rest cart prices are", calculateCartPrice(200, 900, 800, 700));

function handleProduct(product) {
  let { id, name, price } = product;
  if (!id || !name || !price) {
    return {
      message: "Please enter all product details",
      code: 403,
    };
  }
  return `The product ${name} assigned with id ${id} has been priced as ${price}.`;
}

let label = handleProduct({ id: 1, name: "Lapcare G580 Battery", price: 1799 });
console.log(label);

function returnSecondValue(values) {
  return values[1];
}

let valuesArr = [100, 200, 300, 400];
let secondVal = returnSecondValue(valuesArr);
console.log("The second value is", secondVal);
