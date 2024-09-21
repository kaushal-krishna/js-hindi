let myDate = new Date();

console.log(myDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));
console.log(myDate.getMonth() + 1);
console.log(myDate.toLocaleString("en-US", { 
  weekday: "long",
  year: "numeric",
 }));

