const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");
const author = document.querySelector("h3");
const pageEngine = document.querySelector("#functionality");
const message = document.querySelector("p");
const userInteract = document.querySelector("#user");
const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".wrapper");
let inputNumber = 0;

document.body.style.fontFamily = "Montserrat";
document.body.style.listStyle = "none";
document.body.style.boxSizing = "border-box";

title.style.fontWeight = "400";
title.style.textAlign = "center";
title.style.letterSpacing = "2px";
title.style.color = "#21bf73";

subtitle.style.fontWeight = "300";
subtitle.style.textAlign = "center";
subtitle.style.letterSpacing = "5px";

author.style.fontWeight = "300";
author.style.textAlign = "center";
author.style.letterSpacing = "12px";

pageEngine.style.width = "60%";
pageEngine.style.margin = "8px auto";
pageEngine.style.boxSizing = "border-box";
pageEngine.style.display = "flex";
pageEngine.style.flexDirection = "column";
pageEngine.style.paddingLeft = "5%";

// message.textContent = "Hello World";
message.style.color = "#fd5e53";
message.style.margin = "4px 2px";
message.style.paddingLeft = "5%";
message.style.fontSize = "17px";

userInteract.style.display = "flex";
userInteract.style.justifyContent = "space-evenly";

input.setAttribute("placeholder", "Generate number...");
input.style.border = "3px solid #21bf73";
input.style.outlineColor = "#21bf73";
input.style.width = "60%";
input.style.height = "50px";
input.style.fontSize = "17px";
input.style.paddingLeft = "10px";
input.style.boxSizing = "border-box";
input.style.borderRadius = "5px";

button.textContent = "Generate Number";
button.style.backgroundColor = "#21bf73";
button.style.color = "white";
button.style.border = "0px";
button.style.width = "30%";
button.style.height = "50px";
button.style.boxSizing = "border-box";
button.style.fontSize = "22px";
button.style.borderRadius = "5px";

container.style.textAlign = "left";
container.style.padding = "5px";
container.style.width = "60%";
container.style.margin = "auto";

let buttonWork = () => {
  message.textContent = "";
  container.textContent = "";
  if (input.value == "") {
    message.textContent = "Input a value";
    console.log(input.value);
  }
  inputNumber = parseInt(input.value);
  if (isNaN(inputNumber)) {
    message.textContent = "Input a numeric value";
  } else {
    for (let index = 0; index <= inputNumber; index++) {
      const element = document.createElement("span");
      element.style.width = "8%";
      element.style.display = "inline-block";
      element.style.textAlign = "center";
      element.style.fontSize = "25px";
      element.style.fontWeight = "400";
      element.style.padding = "10px 0px";
      element.style.margin = "1.5px 1.5px";
      element.textContent = index;
      element.style.borderRadius = "5px";
      element.style.color = "white";
      if (index % 2 == 0) {
        let factor = 0;
        for (let b = 2; b < index; b++) {
          if (index % b == 0) {
            factor = 1;
            break;
          }
        }
        if (index > 1 && factor == 0) {
          element.style.backgroundColor = "#fd5e53";
        } else {
          element.style.backgroundColor = "#21bf73";
        }
      } else if (index % 2 == 1) {
        let factor = 0;
        for (let b = 2; b < index; b++) {
          if (index % b == 0) {
            factor = 1;
            break;
          }
        }
        if (index > 1 && factor == 0) {
          element.style.backgroundColor = "#fd5e53";
        } else {
          element.style.backgroundColor = "#fddb3a";
        }
      }
      container.appendChild(element);
    }
  }
};

document.body.addEventListener("keypress", (key) => {
  if(key.keyCode == 13){
    buttonWork()
  }
});

button.addEventListener("click", buttonWork);

input.addEventListener("focus", () => {
  message.textContent = "Input a value";
  container.textContent = "";
});
