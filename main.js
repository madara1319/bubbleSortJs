import {
  correctArray,
  stringToNumberArray,
} from "./modules/stringToNumberArray.js";
import { bubbleSort } from "./modules/bubbleSort.js";
import {
  createInputKeyboard,
  activateInputKeyboard,
} from "./modules/inputKeybord.js";
import {
  animateButton,
  animate,
  animateOnKeyUp,
  animateButtonOnKeyboardClicks,
} from "./modules/animateButtons.js";

const dispArray = document.querySelector(".showArray");
const entryInput = document.querySelector("textArea");
createInputKeyboard();
activateInputKeyboard();
animateButtonOnKeyboardClicks();
entryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    localStorage.setItem("entry", entryInput.value);
    let enteredArray;
    enteredArray = stringToNumberArray(entryInput.value);
    if (correctArray) {
      dispArray.innerHTML = `Sorted array looks like this ${bubbleSort(
        enteredArray
      )} `;
    } else {
      dispArray.innerHTML = `You didnt enter array correctly `;
    }
    // console.log(enteredArray);
    // console.log(typeof enteredArray);
    // console.log(stringToNumberArray(entryInput.value));
  }
});
// $(".default").click(animate);
// $(window).keyup(animateOnKeyUp);
