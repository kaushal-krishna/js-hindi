const user = {
  name: "kaushal",
  age: 16,
  welcomeUser: function () {
    console.log(this.age);
  },
};

user.welcomeUser();

function makeChai() {
  let username = "kaushal";
  console.log(this);
}

makeChai();

const makeArrowChai = () => {
  console.log(this);
};
makeArrowChai();

const someFillings = () => ({ patti: "tata" });
console.log(someFillings());

const addSugarAndMilk = (sugar, milk) => `${sugar} and ${milk}`;
console.log(addSugarAndMilk("Gur", "Amul"));
