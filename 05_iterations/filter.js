const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter((num) => {
  return num > 4;
});

console.log(newNums);

// const myNums = [];
// nums.forEach((num) => {
//   if(num > 4){
//     myNums.push(num)
//   }
// });

// console.log(myNums);