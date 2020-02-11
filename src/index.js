// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const calcScreen = document.querySelector(".calc__screen"),
  buttons = document.querySelectorAll("button");

let inputNum = "",
  operating = false;

function printNum(text) {
  calcScreen.innerText = text;
}

function setInputNum(text) {
  console.log(text);
  if ((calcScreen.innerText === "0") | operating) {
    operating = false;
    calcScreen.innerText = "";
  }
  const num = calcScreen.innerText + text;
  printNum(num);
}

function setOperator(op) {
  operating = true;
  inputNum += calcScreen.innerText;
  inputNum = operatorNum(inputNum);
  console.log(inputNum);
  printNum(inputNum);
  inputNum += op;
  console.log(inputNum);
}

function operatorNum(op) {
  console.log(op[op.search(/[\+\-\/\*\=]/g)]);
  const operator = op[op.search(/[\+\-\/\*\=]/g)];
  const num = op.split(operator);
  switch (operator) {
    case "+":
      return parseFloat(num[0]) + parseFloat(num[1]);
    case "-":
      return parseFloat(num[0]) - parseFloat(num[1]);
    case "*":
      return parseFloat(num[0]) * parseFloat(num[1]);
    case "/":
      return parseFloat(num[0]) / parseFloat(num[1]);
      case "=":
        return num[1];
    default:
      return num[0];
  }
}

function resetNum() {
  operating = false;
  inputNum = "";
  printNum(0);
}

function handleClick(event) {
  if (event.target.parentNode.id === "numbers") {
    setInputNum(event.target.id);
  } else if (event.target.parentNode.id === "operators") {
    setOperator(event.target.id);
  } else if (event.target.id === "reset") {
    resetNum();
  } else {
  }
}

function init() {
  setInputNum(0);
  console.log("init");
  if (buttons) {
    buttons.forEach(function(btn) {
      btn.addEventListener("click", handleClick);
    });
  }
}

init();
