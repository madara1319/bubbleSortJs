const entryInputForm = document.querySelector("textArea");
const keyboardButton = document.querySelector(".numberButton");
const containerSection = document.querySelector(".fourthSection");

let createInputKeyboard = () => {
  keyboardButton.classList.add("numberButton1");
  for (let i = 2; i < 10; i++) {
    const injectHTML = ` <div class="numberButton numberButton${i}">${i}</div>`;
    containerSection.innerHTML += injectHTML;
  }
  // gotta work on keyboard to work on clicking on number also on listening on clicking numbers and animating buttons so it looks cool
};

let activateInputKeyboard = () => {
  let keyboardButtonArray = [];
  for (let i = 1; i < 10; i++) {
    keyboardButtonArray[i] = document.querySelector(`.numberButton${i}`);
    keyboardButtonArray[i].addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("clickedValue", i);
      entryInputForm.value += localStorage.getItem("clickedValue");
    });
  }
  // keyboardButton.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("clickedValue", 1);
  //   entryInputForm.value = localStorage.getItem("clickedValue");
  // });
};

export { createInputKeyboard, activateInputKeyboard };
