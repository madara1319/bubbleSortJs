let correctArray;
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
    correctArray = true;
    return numberArray;
  } else if (Number.isInteger(parseInt(array[0]))) {
    let numberedArray = array.split(",").map(Number);
    correctArray = true;
    return numberedArray;
  } else {
    correctArray = false;
  }
};

export { correctArray, stringToNumberArray };
