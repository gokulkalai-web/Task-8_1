
const h1Element = document.createElement("h1");
h1Element.id = "title";
h1Element.innerHTML = "Calculator";
h1Element.style.textAlign = "center";

const paraElement = document.createElement("p");
paraElement.id = "description";
paraElement.innerText = "Create a calculator using DOM";
paraElement.style.textAlign = "center";

const outputElement = document.createElement("div");
outputElement.style.width = "100vw";
//outputElement.style.height = "600px";

const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "result";
inputElement.value = "0";
inputElement.style.width = "400px";
inputElement.style.marginLeft = "calc(100% - 68vw)";

inputElement.style.height = "60px";
inputElement.style.fontSize = "25px";
inputElement.style.color = "#999999";
inputElement.style.backgroundColor = "#cccccc";
inputElement.style.border = "none";

const divElement = document.createElement("div");
divElement.style.width="400px";
divElement.style.height = "400px";
divElement.style.textAlign = "center";
divElement.style.marginLeft = "calc(100% - 68vw)";

const arr = [
  "C",
  "<~",
  ".",
  "X",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  "00",
  "=",
];

for (let i = 0; i < 19; i++) {
  let btn = document.createElement("button");

  if (arr[i] === "C") {
    btn.id = "clear";
    btn.style.color = "red";
  } else if (arr[i] === "1") {
    btn.id = "1";
  } else if (arr[i] === "2") {
    btn.id = "2";
  } else if (arr[i] === "3") {
    btn.id = "3";
  } else if (arr[i] === "4") {
    btn.id = "4";
  } else if (arr[i] === "5") {
    btn.id = "5";
  } else if (arr[i] === "6") {
    btn.id = "6";
  } else if (arr[i] === "7") {
    btn.id = "7";
  } else if (arr[i] === "8") {
    btn.id = "8";
  } else if (arr[i] === "9") {
    btn.id = "9";
  } else if (arr[i] === "0") {
    btn.id = "0";
  } else if (arr[i] === "00") {
    btn.id = "00";
  }  
  else if (arr[i] === "X") {
    btn.style.color = "blue";
    btn.id = "Multiple";
  } else if (arr[i] === "+") {
    btn.style.color = "blue";
    btn.id = "add";
  } else if (arr[i] === "-") {
    btn.style.color = "blue";
    btn.id = "subtract";
  } else if (arr[i] === "/") {
    btn.style.color = "blue";
    btn.id = "divide";
  }


  if (i === 18) {
    btn.style.width = "200px";
    btn.style.height = "75px";
    const boldElement = document.createElement("div");
    boldElement.style.backgroundColor = "#3385ff";
    boldElement.style.color = "white";
    boldElement.innerText = "=";
    btn.appendChild(boldElement);
    btn.id = "equal";
  } else {
    btn.style.width = "100px";
    btn.style.height = "75px";
    btn.innerHTML = `<b>${arr[i]}</b>`;
  }
  btn.style.border = "none";
  btn.style.marginBottom = "1px";
  console.log(btn);
  divElement.appendChild(btn);
}

outputElement.append(inputElement, divElement);

document.body.append(h1Element, paraElement, outputElement);

const clearValue = document.getElementById("clear");
clearValue.addEventListener("click", () => {
  inputElement.value = "0";
});

let previousValue = 0;
let currentOperation = "";
let infixExpression = "";

const add = document.getElementById("add"); //add function
add.addEventListener("click", () => {
  const currentValue = Number(inputElement.value);
  if (!isNaN(currentValue) && Number(currentValue) != 0) {
    previousValue = currentValue;
    console.log(previousValue);
    currentOperation = "+";
    inputElement.value = previousValue + currentOperation;
  }
});

const one = document.getElementById("1");
one.addEventListener("click", () => {  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "1";
  } else {
    inputElement.value = previousvalue + "1";
  }
});
const two = document.getElementById("2");
two.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "2";
  } else {
    inputElement.value = previousvalue + "2";
  }
});

const three = document.getElementById("3");
three.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "3";
  } else {
    inputElement.value = previousvalue + "3";
  }
});

const four = document.getElementById("4");
four.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "4";
  } else {
    inputElement.value = previousvalue + "4";
  }
});
const five = document.getElementById("5");
five.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "5";
  } else {
    inputElement.value = previousvalue + "5";
  }
});
const six = document.getElementById("6");
six.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "6";
  } else {
    inputElement.value = previousvalue + "6";
  }
});
const seven = document.getElementById("7");
seven.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "7";
  } else {
    inputElement.value = previousvalue + "7";
  }
});
const eight = document.getElementById("8");
eight.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "8";
  } else {
    inputElement.value = previousvalue + "8";
  }
});
const nine = document.getElementById("9");
nine.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "9";
  } else {
    inputElement.value = previousvalue + "9";
  }
});
const zero = document.getElementById("0");
zero.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "0";
  } else {
    inputElement.value = previousvalue + "0";
  }
});
const doublezero = document.getElementById("00");
doublezero.addEventListener("click", () => {
  const previousvalue = inputElement.value;
  if (previousvalue === "0") {
    inputElement.value = "0";
  } else {
    inputElement.value = previousvalue + "00";
  }
});

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
  if (inputElement.value.includes("+")) {
    const currentValue = inputElement.value.split("+");
    let val = 0;
    for (let i of currentValue) {
      val += Number(i);
    }
    inputElement.value = val;
  }
  else if(inputElement.value.includes("-")){
    const currentValue = inputElement.value.split("-");
    console.log(currentValue);
    let val;
    if(currentValue.length == 3){
        val = -Number(currentValue[1]) - Number(currentValue[2])
    }
    else{
        val = Number(currentValue[0]) - Number(currentValue[1])
    }
    inputElement.value = val;
  }
  else if(inputElement.value.includes("X")){
    const currentValue = inputElement.value.split("X");
    inputElement.value = Number(currentValue[0]) * Number(currentValue[1])
  }
  else if(inputElement.value.includes("/")){
    const currentValue = inputElement.value.split("/");
    inputElement.value = Number(currentValue[0]) / Number(currentValue[1])
  }
});


const subtract = document.getElementById("subtract");
subtract.addEventListener("click",() =>{
    const currentValue = Number(inputElement.value);
    if (!isNaN(currentValue) && Number(currentValue) != 0) {
      previousValue = currentValue;
      console.log(previousValue);
      currentOperation = "-";
      inputElement.value = previousValue + currentOperation;
    }
  });



const multiple = document.getElementById('Multiple');
multiple.addEventListener("click",() =>{
  const currentValue = Number(inputElement.value);
  if (!isNaN(currentValue) && Number(currentValue) != 0) {
    previousValue = currentValue;
    console.log(previousValue);
    currentOperation = "X";
    inputElement.value = previousValue + currentOperation;
  }
});

const divide = document.getElementById('divide');
divide.addEventListener("click",() =>{
  const currentValue = Number(inputElement.value);
  if (!isNaN(currentValue) && Number(currentValue) != 0) {
    previousValue = currentValue;
    console.log(previousValue);
    currentOperation = "/";
    inputElement.value = previousValue + currentOperation;
  }
});





inputElement.addEventListener("keydown", (event) => {
  const key = event.key;
  console.log(key);
  if (
    key === "Backspace" ||
    key === "1" ||
    key === "2" ||
    key === "3" ||
    key === "4" ||
    key === "5" ||
    key === "6" ||
    key === "7" ||
    key === "8" ||
    key === "9" ||
    key === "0" ||
    key === "Shift"
  ) {
    console.log(key);
  } else {
    alert("only numbers are allowed");
    event.preventDefault();
    inputElement.value = "0";
  }
});
