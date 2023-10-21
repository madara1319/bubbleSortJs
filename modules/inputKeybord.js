const entryInputForm = document.querySelector("textArea");
const keyboardButton = document.querySelector(".numberButton");
const containerSection = document.querySelector(".fourthSection");

let inputKeyboard = () => {
  for (let i = 2; i < 10; i++) {
    const injectHTML = ` <div class="numberButton numberButton${i}">${i}</div>`;
    containerSection.innerHTML += injectHTML;
  }
  //gotta work on keyboard to work on clicking on number also on listening on clicking numbers and animating buttons so it looks cool
  //   for (let i=1; i<10; i++)
  //   {
  //     let keyboardButton=document.querySelector(`.numberButton${i}`);
  //     keyboardButton.addEventListener("click", (e) => {
  //         e.preventDefault();
  //         localStorage.setItem("clickedValue", 1);
  //         entryInputForm.value = localStorage.getItem("clickedValue");
  //       }
  //   }
  keyboardButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("clickedValue", 1);
    entryInputForm.value = localStorage.getItem("clickedValue");
  });
};

export { inputKeyboard };
