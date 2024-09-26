const promiseOne = new Promise(function (resolve, reject) {
  // Do async task
  // DB calls, cryptography, ntework
  setTimeout(() => {
    console.log("Async task completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Username passed to callback");
    resolve({username: "chai", email: "chai@example.com"})
  }, 1000)
})

promiseThree.then(function (user) {
  console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Kaushal", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log("User:", user);
    return user.username;
  })
  .then((username) => {
    console.log("Username:", username);
    return username.slice(0, 1);
  })
  .then((firstLetter) => {
    console.log("First Letter:", firstLetter);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promiseFour is either resolved or rejected.");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("The promiseFive is either resolved or rejected.")
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data[0].address);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

getAllUsers()

fetch("https://api.github.com/users/kaushal-krishna")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => {
  console.log(error)
})