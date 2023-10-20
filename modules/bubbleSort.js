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
//would be cool if u added time measurment

export { bubbleSort };
