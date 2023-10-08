console.log("Test");
testArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

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
console.log(`Array looks like this before ${testArray}`);
bubbleSort(testArray);
console.log(`Array looks like this after ${testArray}`);

const dispArray = document.querySelector(".showArray");
const entryInput = document.querySelector("textArea");

entryInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    localStorage.setItem("entry", entryInput.value);
    let sortedArray = bubbleSort(entryInput.value);

    console.log(Array.isArray(sortedArray));
    console.log(sortedArray);
    bubbleSort(sortedArray);
    console.log(bubbleSort(entryInput.value));
    dispArray.innerHTML = `Sorted array looks like this ${sortedArray}`;
    console.log(bubbleSort([3, 2, 1]));
  }
});

// entryInput.value = localStorage.getItem("entry");
