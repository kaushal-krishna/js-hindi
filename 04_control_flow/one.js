let score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`Power is: ${power}`);
} else {
  console.log(`Power not accessible`);
}

const balance = 750;

// Not recommended code due to unreadibility
if (balance > 500)
  console.log("test balance"), console.log("one liner test with comma");

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("less than 1200 and more");
}

const isUserLoggedIn = true;
const hasDebitCard = true;
const isAvailable = true;
const isLoggedInWithGoogle = false;
const isLoggedInWithEmail = true;

if (isUserLoggedIn && hasDebitCard && isAvailable) {
  console.log("Allowed to buy courses");
}

if (isLoggedInWithEmail || isLoggedInWithGoogle) {
  console.log("User logged in");
}
