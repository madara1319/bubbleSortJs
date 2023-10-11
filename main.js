let bubbleSort = (array) => {
  let isSorted = false;
  let unsortedUntilIndex = array.length - 1;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < unsortedUntilIndex; i++) {
      // console.log(`Kutas ${i} to ${testArray[i]}`);
      if (array[i] > array[i + 1]) {
        let buffer = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buffer;
        isSorted = false;
      }
    }
    unsortedUntilIndex--;
    //   console.log(`Just a look at array ${array}`);
  }
  return array;
};

let stringToNumberArray = (array) => {
  if (array[0] === "[") {
    let numberArray = [];
    let stringInputArray = array;
    stringInputArray = stringInputArray.slice(1);
    stringInputArray = stringInputArray.slice(0, stringInputArray.length - 1);
    console.log(
      `pierwszy znak stringInputArray ${stringInputArray[0]} a ostatni to ${
        stringInputArray[stringInputArray.length - 1]
      }`
    );
    console.log(`array wyglada jak ${stringInputArray}`);
    let numberedArray = stringInputArray.split(",").map(Number);
    for (let i = 0; i < numberedArray.length; i++) {
      if (Number.isInteger(parseInt(numberedArray[i]))) {
        numberArray.push(parseInt(numberedArray[i]));
        // console.log(array[i]);
      }
    }
    return numberArray;
  } else if (Number.isInteger(parseInt(array[0]))) {
    let numberedArray = array.split(",").map(Number);
    return numberedArray;
  } else return `You didnt input Array`;
};

const dispArray = document.querySelector(".showArray");
const entryInput = document.querySelector("textArea");

entryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    localStorage.setItem("entry", entryInput.value);
    let enteredArray;
    enteredArray = stringToNumberArray(entryInput.value);
    dispArray.innerHTML = `Sorted array looks like this ${bubbleSort(
      enteredArray
    )}  entry Input value looks like this ${entryInput.value}`;
    console.log(enteredArray);
    console.log(typeof enteredArray);
    console.log(stringToNumberArray(entryInput.value));
  }
});
