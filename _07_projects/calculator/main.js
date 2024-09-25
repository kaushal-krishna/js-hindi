const numberedKeys = document.querySelectorAll(
  "div span:not(.operator):not(.eval)"
);
const operatorKeys = document.querySelectorAll("span.operator");
const evalKey = document.querySelectorAll("span.eval");
const clearKey = document.querySelector("#clear");
const screen = document.querySelector("#screen");

const values = [];

numberedKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    setScreenValues(e.target.innerHTML);
  });
});

operatorKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    setScreenValues(e.target.innerHTML);
  });
});

function setScreenValues(value) {
  const operators = ["+", "-", "x", "÷"];
  let isOperator = false;

  for (let i = 0; i < operators.length && !isOperator; i++) {
    const oprt = operators[i];
    if (oprt === value) {
      isOperator = true;
    }
  }


  if (values.length === 19) {
    throw new Error("Maximum value reached");
  } else {
    if (!isNaN(value) || isOperator) {
      if (isOperator) {
        screen.innerHTML = "";
      }
      screen.append((document.createTextNode = value));
      collectValues(isOperator ? value : parseInt(value));
    } else {
      throw new Error("Value isn't valid");
    }
  }
}

function collectValues(value) {
  values.push(value);
  if(values[values.length - 1] === "+" || values[values.length - 1] === "-" || values[values.length - 1] === "x" || values[values.length - 1] === "÷" && typeof value === "number") {
    screen.innerHTML = ""
  }
}
