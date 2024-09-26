const numberedKeys = document.querySelectorAll(
  "div span:not(.operator):not(.eval)"
);
const operatorKeys = document.querySelectorAll("span.operator");
const evalKey = document.querySelector(".eval");
const clearKey = document.querySelector("#clear");
const resultScreen = document.querySelector("#resultScreen");
const valuesScreen = document.querySelector("#valuesScreen");

const values = [];

numberedKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (isNaN(values[values.length - 1])) {
      resultScreen.innerHTML = "";
    }
    setResultScreenValues(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    if (!isNaN(key)) {
      if (isNaN(values[values.length - 1])) {
        resultScreen.innerHTML = "";
      }
    }
    setResultScreenValues(key);
  }
  if (key === "=" || key === "Enter" && values.length !== 0) {
    evalKey.click();
  } else if (key === "Backspace" || key === "Delete") {
    clearKey.click()
  }
});

operatorKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    setResultScreenValues(e.target.innerHTML);
  });
});

evalKey.addEventListener("click", () => {
  try {
    if (isNaN(values[values.length - 1])) {
      values.splice(values.length - 1, 1);
    }

    const result = evaluateValues(values);
    resultScreen.innerHTML = result;
    values.length = 0;
    valuesScreen.innerHTML = result;
    values.push(result);
  } catch (error) {
    resultScreen.innerHTML = "Error";
  }
});

clearKey.addEventListener("click", () => {
  values.length = 0;
  resultScreen.innerHTML = "";
  valuesScreen.innerHTML = "";
});

function setResultScreenValues(value) {
  const operators = ["+", "-", "x", "÷"];
  let isOperator = false;

  for (let i = 0; i < operators.length && !isOperator; i++) {
    const oprt = operators[i];
    if (oprt === value && !isNaN(values[values.length - 1])) {
      resultScreen.innerHTML = "";
      isOperator = true;
    }
  }

  if (values.length === 19) {
    throw new Error("Maximum values reached");
  } else {
    if (!isNaN(value) || isOperator) {
      resultScreen.append((document.createTextNode = value));
      collectValues(isOperator ? value : parseInt(value));
    } else {
      throw new Error("Value isn't valid");
    }
  }
}

function collectValues(value) {
  values.push(value);
  valuesScreen.innerHTML = values.toString().replace(/,/g, "");
}

function evaluateValues(values) {
  const expressions = values.join("").replace(/x/g, "*").replace(/÷/g, "/");
  return eval(expressions);
}
