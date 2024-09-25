const myNums = [1, 2, 3, 4, 5];

const myTotal = myNums.reduce((acc, currVal) => {
  // console.log(`accumulator: ${acc}, currentValue: ${currVal}`);
  return acc + currVal
}, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 999,
  },
  {
    itemName: "Mobile Dev Course",
    price: 5999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
]

const totalCartPrice = shoppingCart.reduce((acc, item) => {return acc + item.price}, 0)
console.log(totalCartPrice);
