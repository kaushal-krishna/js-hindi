const PiDescriptor = Object.getOwnPropertyDescriptor(Math, "PI"); // - Not allowed to write, enumerate or configured

// console.log("PI Desc:", PiDescriptor);

const Chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: () => {
    console.log("Chai nhi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(Chai, "name")); // - writable: true

// Object.defineProperty(Chai, "name", { writable: false, enumerable: false }); // - writable: false, enumerable/iteratable: false
// console.log(Object.getOwnPropertyDescriptor(Chai, "name")); 

for (const [key, value] of Object.entries(Chai)) {
  if (typeof value !== "function") { // - Check for looping only variables
    console.log(`${key}: ${value}`);
  }
}
