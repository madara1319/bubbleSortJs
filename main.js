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
  animate,
  animateOnKeyUp,
  animateButtonOnKeyboardClicks,
} from "./modules/animateButtons.js";

import { selectionSort } from "./modules/selectionSort.js";
import { insertionSort } from "./modules/insertionSort.js";

import { SortableArray } from "./modules/quickSort.js";


const dispArray = document.querySelector(".showArray");
const entryInput = document.querySelector("textArea");
createInputKeyboard();
activateInputKeyboard();
animateOnKeyUp();
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


const test=new SortableArray([2,5,1,6,23,1,3,15]);
console.log(test);
//console.log(test.partition(0,(test.array.length-1)));
test.quicksort(0,(test.array.length-1));
console.log(test.array);
